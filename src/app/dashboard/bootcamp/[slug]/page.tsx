import { Breadcrumb, BreadcrumbPage } from "@/components/breadcrumb";
import { Tab, Tabs } from "@/components/tabs";
import { CheckIcon } from "@heroicons/react/16/solid";
import { BootcampDetailHeader } from "../_components/bootcamp-header";
import { MentorCard } from "../_components/mentor-card";
import { ContentContainer } from "../_components/content-container";
import { ScheduleCards } from "../_components/schedule-cards";
import { CurriculumAccordion } from "../_components/curriculum-accordion";
import { bootcamp } from "@/lib/constants/bootcamp-detail-sample";
import CtaCard from "../_components/cta-card";
import BootcampTags from "../_components/bootcamp-tags";

const BootcampDetailPage = ({ params }: { params: { slug: string } }) => {
  const { slug } = params;

  const pages: BreadcrumbPage[] = [
    { name: 'Bootcamp', href: '/dashboard/bootcamp', current: false },
    { name: 'Bootcamp Detail', href: `/dashboard/bootcamp/${slug}`, current: true },
  ];

  const tabs: Tab[] = [
    { name: 'About', href: `#about`, current: true },
    { name: 'Benefit', href: `#benefit`, current: false },
    { name: 'Mentor', href: `#mentor`, current: false },
    { name: 'Schedule', href: `#schedule`, current: false },
    { name: 'Curriculum', href: `#curriculum`, current: false },
  ];

  return <div className="mx-auto flex w-full max-w-7xl items-start gap-x-8">
    <div className="flex flex-col gap-6 flex-1">
      <Breadcrumb pages={pages} />
      <BootcampDetailHeader
        title={bootcamp.title}
        description={bootcamp.description}
        period={bootcamp.period}
        location={bootcamp.location}
        level={bootcamp.level}
      />
      <div className="flex flex-col gap-12 sticky top-64">
        <Tabs tabs={tabs} />
        {/* About */}
        <ContentContainer id="about" title="About Bootcamp">
          <p className="text-sm text-secondary-content dark:text-secondary-content-dark">
            {bootcamp.about}
          </p>
        </ContentContainer>
        {/* Benefit */}
        <ContentContainer id="benefit" title="Bootcamp Benefit">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {bootcamp.benefits.map((benefit, idx) => (
              <div key={`benefit-${idx}`} className="flex items-center gap-2 text-sm text-secondary-content dark:text-secondary-content-dark">
                <CheckIcon className="w-4 h-4 shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>
        </ContentContainer>
        {/* Mentor */}
        <ContentContainer id="mentor" title="Your Mentor">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {bootcamp.mentors.map((mentor, idx) => (
              <MentorCard key={`mentor-${idx}`} mentorImage={mentor.image} mentorName={mentor.name} mentorDescription={mentor.description} />
            ))}
          </div>
        </ContentContainer>
        {/* Schedule */}
        <ContentContainer id="schedule" title="Schedule, Location & Group">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <ScheduleCards {...bootcamp.scheduleDetail} />
          </div>
        </ContentContainer>
        {/* Curriculum */}
        <ContentContainer id="curriculum" title="Curriculum">
          <div className="space-y-6">
            {bootcamp.curriculums.map((curriculum, idx) => (
              <CurriculumAccordion key={`curriculum-${idx}`} {...curriculum} />
            ))}
          </div>
        </ContentContainer>
      </div>
    </div>

    {/* Right Pane Placeholder */}
    <div className="sticky top-24 hidden w-96 shrink-0 lg:block space-y-6">
      <CtaCard
        imageUrl={bootcamp.headerImage}
        price={bootcamp.price}
        discountPrice={bootcamp.discountPrice}
        quota={bootcamp.quota}
        enrolled={bootcamp.enrolled}
      />
      <div className="space-y-4">
        <p className="text-lg font-medium text-primary-content dark:text-primary-content-dark">Skill you&apos;ll gain</p>
        <BootcampTags tags={bootcamp.tags} />
      </div>
    </div>
  </div>
}

export default BootcampDetailPage;