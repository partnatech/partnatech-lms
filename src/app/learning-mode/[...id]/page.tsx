import { Logo } from "@/components/logo"
import UserMenuDropdown from "@/components/user-menu-dropdown"
import { authOptions } from "@/lib/auth"
import { StrapiResponse } from "@/types/strapi"
import { CourseContentItemResponse, CourseResponse } from "@/types/strapi/course"
import { prisma } from "@/lib/prisma"
import { getServerSession } from "next-auth"
import Link from "next/link"
import qs from "qs"
import React from "react"
import { FaCheck, FaTrophy, FaUserGroup } from "react-icons/fa6"
import ContentDropdown from "../__components/content-dropdown"
import OverviewTab from "../__components/overview-tab"
import { revalidatePath } from "next/cache"
import NextCourseButton from "../__components/next-course-button"

interface LearningModeProps {
  params: {
    id: string[]
  }
  searchParams: { [key: string]: string | string[] | undefined }
}

const fetchCourseFromStrapi = async (id: string) => {
  const query = qs.stringify({
    populate: [
      "cover_images",
      "category",
      "tools_used&select=tools_used,tools_used.icons",
      "course_sections&select=course_sections,course_sections.course_content_items",
      "course_reviews&select=course_reviews,course_reviews.name,course_reviews.rating,course_reviews.content,course_reviews.avatar",
      "mentors&select=mentors,mentors.avatar",
    ],
    fields: "*",
  })

  const response = await fetch(`${process.env.STRAPI_BASE_URL}/api/courses/${id}?${query}`, {
    cache: "no-store",
  })
  const strapiResponse: StrapiResponse<CourseResponse> = await response.json()
  return strapiResponse
}

const fetchCourseContentFromStrapi = async (id: string) => {
  if (!id) return

  const query = qs.stringify({
    populate: ["resource_files", "snippet_code_list"],
    fields: "*",
  })

  const response = await fetch(
    `${process.env.STRAPI_BASE_URL}/api/course-content-items/${id}?${query}`,
    {
      cache: "no-store",
    }
  )
  const strapiResponse: StrapiResponse<CourseContentItemResponse> = await response.json()
  return strapiResponse
}

const fetchCourseContentProgress = async (userId: string, courseId: number) => {
  if (!userId) return

  const response = await prisma.userCourseContentProgress.findMany({
    where: {
      userId,
      courseId,
    },
  })
  return response
}

const LearningModePage = async ({ params, searchParams }: LearningModeProps) => {
  const currentVideoId = searchParams.currentVideo as string
  const courseId = params.id[0]
  const courseSectionId = params.id[1]

  const session = await getServerSession(authOptions)
  const user = session?.user

  /* Course Data */
  const courseResponse = await fetchCourseFromStrapi(courseId)
  const courseData = courseResponse.data
  const courseSectionsData = courseData.attributes.course_sections
  const mentorsData = courseData.attributes.mentors
  const categoryData = courseData.attributes.category

  /* Get current course section */
  const currentCourseSectionData = courseSectionsData.data.find(
    section => section.id === parseInt(courseSectionId)
  )

  /* Get Video Length */
  let courseContentNameList: string[] = []

  courseSectionsData.data.forEach(section => {
    section.attributes.course_content_items.data.forEach(content => {
      courseContentNameList.push(content.attributes.title)
    })
  })

  /* Get current content by id */
  const courseContentResponse = await fetchCourseContentFromStrapi(currentVideoId)
  const courseContentData = courseContentResponse?.data
  console.log("🚀 ~ LearningModePage ~ courseContentData:", courseContentData)

  /* Get all course content progress */
  const courseContentProgressResponse = await fetchCourseContentProgress(
    user?.id ?? "",
    parseInt(courseId)
  )
  const isCourseCompleted = courseContentProgressResponse?.find(
    item => item.courseContentId === parseInt(currentVideoId)
  )?.isComplete

  /* Get next content id */
  let nextContentId: number | null = null

  const currentIndex = courseSectionsData.data.findIndex(
    item => item.id === parseInt(currentVideoId)
  )

  const handleComplete = async () => {
    "use server"

    const response = await prisma.userCourseContentProgress.findFirst({
      where: {
        courseContentId: parseInt(currentVideoId),
      },
    })

    if (!response) {
      await prisma.userCourseContentProgress.create({
        data: {
          courseId: parseInt(courseId),
          courseContentId: parseInt(currentVideoId),
          categoryId: categoryData.data.id,
          userId: user?.id,
          isComplete: true,
        },
      })

      revalidatePath(`/learning-mode/${currentVideoId}`)
    } else {
      console.log("Already marked as complete")
    }
  }

  return (
    <div>
      <nav className="bg-primary-base-dark p-8 fixed top-0 w-full flex items-center justify-between h-[86px] border-b border-secondary-border z-50">
        <div className="flex items-center gap-6">
          <Link href="/dashboard/my-learning">
            <Logo />
          </Link>

          <div className="h-[38px] w-[2px] bg-secondary-border"></div>

          <p className="text-sm">{courseData.attributes.title}</p>
        </div>

        {user && <UserMenuDropdown user={user} />}
      </nav>
      <div className="bg-primary-base-dark min-h-screen transition duration-150 ease-in-out mt-[86px]">
        <main>
          <div className="grid grid-cols-12">
            {/* Left Content */}
            {courseContentData ? (
              <div className="col-span-9">
                <div className="w-full h-[600px]">
                  <iframe
                    className="w-full h-full"
                    src={`${courseContentData?.attributes.video_link}?autoplay=1`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="autoplay"
                    allowFullScreen
                  ></iframe>
                </div>

                <div className="py-6 px-8 flex items-center justify-between">
                  <p className="text-[28px] line-clamp-2 font-semibold">
                    {courseContentData?.attributes.title}
                  </p>

                  {isCourseCompleted ? (
                    <NextCourseButton courseSectionList={courseSectionsData.data} />
                  ) : (
                    <form action={handleComplete}>
                      <button
                        type="submit"
                        className="px-4 py-2 border border-primary-border bg-tertiary-base-dark rounded-lg text-secondary-content-dark hover:bg-primary-dark/50 hover:text-white transition-all text-sm"
                      >
                        Complete
                      </button>
                    </form>
                  )}
                </div>

                <OverviewTab
                  data={courseData}
                  resourceFilesData={courseContentData.attributes.resource_files.data}
                  snippetCodeListData={courseContentData.attributes.snippet_code_list}
                  externalReferenceData={courseContentData.attributes.external_reference}
                />
              </div>
            ) : (
              <div className="col-span-9">
                <div className="h-[calc(100vh-84px)] flex flex-col justify-center p-8">
                  <p className="text-2xl font-semibold">Please select video on right menu.</p>
                </div>
              </div>
            )}

            {/* Right Content */}
            <div className="col-span-3 py-6 px-4 bg-secondary-base-dark min-h-screen">
              <div className="flex flex-col gap-6">
                <p className="text-2xl font-semibold">Learning Path Content</p>

                {courseContentProgressResponse && (
                  <div className="flex items-center gap-4">
                    {/* Radial Progress */}
                    <div className="relative w-12 h-12">
                      <svg className="w-full h-full" viewBox="0 0 100 100">
                        <circle
                          className="text-tertiary-base-dark stroke-current"
                          stroke-width="6"
                          cx="50"
                          cy="50"
                          r="40"
                          fill="transparent"
                        ></circle>

                        <circle
                          className="text-primary-dark progress-ring__circle stroke-current"
                          stroke-width="6"
                          stroke-linecap="round"
                          cx="50"
                          cy="50"
                          r="40"
                          fill="transparent"
                          stroke-dasharray="251.2"
                          stroke-dashoffset={`calc(251.2 - (251.2 * ${
                            (courseContentProgressResponse.length / courseContentNameList.length) *
                            100
                          }) / 100)`}
                        ></circle>
                      </svg>
                      <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full">
                        <FaTrophy className="text-primary-dark" />
                      </div>
                    </div>

                    <div>
                      <p className="text-xs text-secondary-content-dark mb-1">Your Progress</p>
                      <p className="text-sm">
                        {courseContentProgressResponse.length}/{courseContentNameList.length}{" "}
                        Lessons Completed
                      </p>
                    </div>
                  </div>
                )}

                <div className="flex flex-col gap-4">
                  {courseSectionsData.data.length > 0 ? (
                    <>
                      {courseSectionsData.data.map(courseSection => (
                        <ContentDropdown
                          key={courseSection.id}
                          data={courseSection}
                          courseProgress={courseContentProgressResponse}
                          courseData={courseData}
                          isOpen={courseSection.id === parseInt(courseSectionId)}
                        />
                      ))}
                    </>
                  ) : (
                    <p className="text-sm text-secondary-base-dark">No content found</p>
                  )}
                </div>

                <div className="w-full">
                  <div className="border border-primary-border rounded-lg w-full bg-background-secondary text-white">
                    <div className="bg-tertiary-base-dark py-3 w-full flex items-center justify-center gap-2">
                      <FaCheck className="text-secondary-dark w-4 h-4" />
                      <p className="text-center text-secondary-dark text-sm">Mentoring Available</p>
                    </div>

                    {mentorsData.data.map(mentor => (
                      <Link
                        href={`/dashboard/mentor/${mentor.id}`}
                        key={mentor.id}
                        className="p-4 last:border-none border-b border-primary-border flex items-center gap-3 group"
                      >
                        <img
                          src={`${process.env.STRAPI_BASE_URL}${mentor.attributes.avatar.data.attributes.url}`}
                          className="w-10 h-10 rounded-full object-cover"
                        ></img>

                        <div>
                          <p className="text-sm font-semibold group-hover:text-secondary-dark mb-1">
                            {mentor.attributes.name}
                          </p>
                          <p className="text-xs text-secondary-content-dark">
                            {mentor.attributes.role}
                          </p>
                        </div>
                      </Link>
                    ))}

                    {/* <div className="p-4 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-secondary-content-dark">
                        <FaUserGroup />
                        <p className="text-sm">1x Free Quota</p>
                      </div>

                      <button className="border border-primary-dark bg-primary-dark/20 hover:bg-primary-dark/50 transition-all rounded-lg px-4 py-2 text-sm">
                        Set Schedule
                      </button>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default LearningModePage
