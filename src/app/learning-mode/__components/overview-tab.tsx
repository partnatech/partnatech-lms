"use client"
import { DataWrapper, Image } from "@/types/strapi"
import { CourseResponse, ExternalReference, SnippetCode } from "@/types/strapi/course"
import { cn } from "@/utils/cn"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { FaCheck } from "react-icons/fa6"
import { HiArrowDownTray, HiArrowUpRight, HiMiniArrowUpRight, HiPhoto } from "react-icons/hi2"
import { File } from "@/types/strapi"
import { HiDocument, HiDocumentDuplicate } from "react-icons/hi"
import { serialize } from "next-mdx-remote/serialize"
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote"
import rehypeCodeTitles from "rehype-code-titles"
import rehypePrism from "rehype-prism-plus"

interface OverviewTabProps {
  data: CourseResponse
  resourceFilesData: File[]
  externalReferenceData: ExternalReference[]
  snippetCodeListData: SnippetCode[]
}

const TAB_LIST = [
  {
    href: "#overview",
    label: "Overview",
  },
  {
    href: "#resources",
    label: "Resources",
  },
]

const OverviewTab = ({
  data,
  resourceFilesData,
  externalReferenceData,
  snippetCodeListData,
}: OverviewTabProps) => {
  console.log("🚀 ~ externalReferenceData:", snippetCodeListData)
  const [hash, setHash] = useState("#overview")

  const [serializedSnippetCode, setSerializedSnippetCode] = useState<MDXRemoteSerializeResult[]>([])

  const serializeData = async () => {
    const serializedContents: MDXRemoteSerializeResult[] = []

    await Promise.all(
      snippetCodeListData.map(async content => {
        const html = await serialize(content.snippet_code, {
          mdxOptions: {
            rehypePlugins: [rehypeCodeTitles, rehypePrism],
            development: true,
          },
        })
        serializedContents.push(html)
      })
    )

    setSerializedSnippetCode(serializedContents)
  }

  const handleCopy = async (text: string) => {
    console.log("🚀 ~ handleCopy ~ text:", text)
    try {
      await navigator.clipboard.writeText(text)
      console.log("Content copied to clipboard")
    } catch (err) {
      console.error("Failed to copy: ", err)
    }
  }

  const iconRenderer = (ext: string) => {
    if (ext === ".png" || ext === ".jpeg" || ext === ".jpg") {
      return <HiPhoto className="w-6 h-6" />
    }

    return <HiDocument className="w-6 h-6" />
  }

  useEffect(() => {
    if (snippetCodeListData.length > 0) {
      serializeData()
    }
  }, [])

  return (
    <>
      <div className="border-b border-secondary-border w-full flex px-8">
        {TAB_LIST.map(tab => (
          <button
            key={tab.href}
            onClick={() => setHash(tab.href)}
            className={cn(
              hash === tab.href ? " border-primary-dark text-primary-dark" : "border-transparent",
              "px-6 text-sm py-4 border-b "
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {hash === "#overview" && (
        <div className="w-full">
          {/* Description */}
          <div className="p-8 grid grid-cols-12">
            <div className="col-span-3">
              <p className="text-[18px]">Description</p>
            </div>
            <div className="col-span-9">
              <p className="text-sm text-secondary-content-dark leading-relaxed">
                {data.attributes.descriptions}
              </p>
            </div>
          </div>

          {/* Objective */}
          <div className="p-8 grid grid-cols-12">
            <div className="col-span-3">
              <p className="text-[18px]">Objectives</p>
            </div>
            <div className="col-span-9">
              <div className="grid grid-cols-2 gap-4">
                {data.attributes.list_of_learning.map(item => (
                  <div key={item} className="flex items-center gap-2 text-secondary-content-dark">
                    <FaCheck className="w-5 h-5" />
                    <p className=" text-sm">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-8 grid grid-cols-12">
            <div className="col-span-3">
              <p className="text-[18px]">Tools</p>
            </div>
            <div className="col-span-9">
              <div className="grid grid-cols-3 gap-6">
                {data.attributes.tools_used.map(tool => (
                  <div
                    key={tool.id}
                    className="bg-background-secondary border border-primary-border p-6 rounded-lg"
                  >
                    <img
                      src={`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${tool.icons.data.attributes.url}`}
                      className="w-10 h-10 rounded-full object-cover mb-4"
                    ></img>

                    <div className="mb-4">
                      <p className="text-sm mb-2">{tool.title}</p>
                      <p className="text-xs text-secondary-content-dark">{tool.description}</p>
                    </div>

                    <Link href={tool.link} className="text-primary-dark flex items-center gap-2">
                      Download
                      <HiMiniArrowUpRight className="w-5 h-5" />
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {hash === "#resources" && (
        <div className="w-full">
          {resourceFilesData.length > 0 && (
            <div className="p-4 border-b border-primary-border grid grid-cols-3 gap-6">
              {resourceFilesData.map(file => (
                <div
                  key={file.id}
                  className="border border-primary-border p-4 rounded-lg bg-secondary-base-dark flex items-center gap-4"
                >
                  <div className="w-11 h-11 flex items-center justify-center bg-tertiary-base-dark rounded-full text-secondary-content-dark">
                    {iconRenderer(file.attributes.ext)}
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="line-clamp-1 text-sm">{file.attributes.name}</p>
                    <Link
                      href={`${process.env.NEXT_PUBLIC_STRAPI_BASE_URL}${file.attributes.url}`}
                      rel="noopener noreferrer"
                      target="_blank"
                      className="font-medium text-sm text-primary-dark flex items-center gap-2 hover:underline"
                    >
                      <p>Download</p>
                      <HiArrowDownTray className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          )}

          {serializedSnippetCode.length > 0 && (
            <div className="p-8 grid grid-cols-12">
              <div className="col-span-3">
                <p className="text-[18px]">Snippet Code</p>
              </div>
              <div className="col-span-9">
                <div className="flex flex-col gap-4">
                  {serializedSnippetCode.map((code, index) => (
                    <div key={index} className="flex flex-col gap-2 text-secondary-content-dark">
                      <p className="text-sm">Snippet Code - Topic {index + 1}</p>
                      <div className="relative">
                        <MDXRemote {...code} />
                        {/* <button
                          onClick={() => handleCopy(code)}
                          className="flex items-center gap-2 p-2 text-secondary-content-dark absolute right-2 top-9 border border-transparent bg-tertiary-base-dark rounded-lg hover:border-primary-dark/20 "
                        >
                          <HiDocumentDuplicate />
                          <p className="text-xs">Copy Code</p>
                        </button> */}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {externalReferenceData.length > 0 && (
            <div className="p-8 grid grid-cols-12">
              <div className="col-span-3">
                <p className="text-[18px]">External References</p>
              </div>
              <div className="col-span-9">
                <div className="grid grid-cols-2 gap-4">
                  {externalReferenceData.map((item, index) => (
                    <div
                      key={item.link}
                      className="flex items-center gap-2 text-secondary-content-dark"
                    >
                      <p className="text-sm text-secondary-content-dark">{item.title}</p>
                      <Link href={item.link}>
                        <HiArrowUpRight className="w-4 h-4 text-primary-dark" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  )
}

export default OverviewTab
