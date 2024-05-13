"use client"

import React, { Fragment, useState } from "react"
import { FaCheck, FaGraduationCap, FaThumbsUp, FaX } from "react-icons/fa6"
import { Dialog, Transition } from "@headlessui/react"
import { DataWrapper, StrapiResponse } from "@/types/strapi"
import { Subscription } from "@/types/strapi/subscription"
import { formatMillisecondsToMonths, formatRupiah } from "@/utils/number"
import { cn } from "@/utils/cn"
import { CategoryResponse } from "@/types/strapi/category"
import { User } from "next-auth"
import { format, addMilliseconds } from "date-fns"

interface UnlockLearningPathButtonProps {
  categoryData: StrapiResponse<CategoryResponse>
  data: DataWrapper<Subscription>[]
  userData?: User
}

const UnlockLearningPathButton = ({
  categoryData,
  data,
  userData,
}: UnlockLearningPathButtonProps) => {
  const [isOpen, setIsOpen] = useState(false)

  const handleClickUnlock = async (data: DataWrapper<Subscription>) => {
    try {
      // Check is there any row with categoryId and userId
      const currentSubsResponse = await fetch(
        `/api/current-subscription?categoryId=${categoryData.data.id}&userId=${userData?.id}`,
        {
          method: "GET",
        }
      )
      const parsedCurrentSubsResponse = await currentSubsResponse.json()

      if (parsedCurrentSubsResponse.data === null) {
        const expiredDate = addMilliseconds(
          new Date().toDateString(),
          parseInt(data.attributes.duration)
        )
        const payload = {
          categoryId: categoryData.data.id,
          userId: userData?.id,
          subscriptionId: data.id,
          expiredAt: expiredDate,

          // For transaction log
          productId: data.id,
          productName: data.attributes.title,
          type: "SUBSCRIPTION",
          amount:
            data.attributes.discount_price > 0
              ? data.attributes.discount_price
              : data.attributes.price,
        }

        const subscribeResponse = await fetch("/api/subscribe-learning-path", {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json",
          },
        })

        const parsedSubscribeResponse = await subscribeResponse.json()
        console.log("🚀 ~ handleClickUnlock ~ parsedSubscribeResponse:", parsedSubscribeResponse)
      }
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <>
      {data.length > 0 && (
        <>
          <button
            onClick={() => setIsOpen(true)}
            className="w-full py-3 px-4 text-sm rounded-lg bg-gradient-to-b from-[#14B8A6] to-[#0F766E] text-white flex items-center justify-center gap-2"
          >
            <FaGraduationCap className="w-5 h-5" />
            <p>Unlock Learning Path</p>
          </button>

          <Transition
            show={isOpen}
            enter="transition-opacity duration-150"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity duration-150"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            as={Fragment}
          >
            <Dialog onClose={() => setIsOpen(false)} className="relative z-50">
              <div className="fixed inset-0 flex w-screen items-center justify-center">
                {/* The actual dialog panel  */}
                <Dialog.Panel className="mx-auto w-screen h-screen bg-primary-content flex items-center justify-center">
                  <div className="w-[1024px] p-8 relative">
                    <button className="absolute top-4 right-4" onClick={() => setIsOpen(false)}>
                      <FaX className="w-4 h-4" />
                    </button>
                    <p className="text-[28px] font-semibold text-center mb-8">
                      <span className="text-primary-dark">
                        {categoryData.data.attributes.title}
                      </span>{" "}
                      Learning Plan
                    </p>

                    <div className="grid grid-cols-3 gap-6">
                      {data.map(subscription => {
                        const parsedDuration = parseInt(subscription.attributes.duration)
                        const durationInMonth = formatMillisecondsToMonths(parsedDuration)

                        return (
                          <div
                            className="bg-secondary-base-dark border border-primary-border rounded-lg h-max hover:border-primary-dark/40 transition-all"
                            key={subscription.id}
                          >
                            <div className="p-6 flex flex-col gap-4 border-b border-primary-border">
                              <div className="flex items-center gap-2">
                                <p className="font-semibold text-2xl">{durationInMonth} Month</p>

                                {subscription.attributes.is_recommended && (
                                  <div className="bg-[#365314]/50 py-1 px-2 flex items-center rounded-full gap-1 text-secondary-dark">
                                    <FaThumbsUp className="w-3 h-3" />
                                    <p className="text-xs">Recommend</p>
                                  </div>
                                )}
                              </div>
                              <p className="text-secondary-content-dark text-sm">
                                Unlock all {categoryData.data.attributes.title} learning content for{" "}
                                {durationInMonth} month.
                              </p>

                              <div className="flex items-center gap-2">
                                <p className="font-semibold text-lg text-secondary-dark">
                                  {formatRupiah(subscription.attributes.discount_price)}
                                </p>
                                <p className="text-sm text-secondary-content-dark line-through">
                                  {formatRupiah(subscription.attributes.price)}
                                </p>
                              </div>
                            </div>

                            <div className="p-6 flex flex-col gap-6">
                              <div className="flex flex-col gap-6">
                                <div className="flex items-center gap-2">
                                  <img src="/illustration/partna-coin.svg" />
                                  <p className="text-sm text-secondary-dark">
                                    Get +
                                    {subscription.attributes.partna_coin_amounts.toLocaleString()}{" "}
                                    PartnaCoin
                                  </p>
                                </div>

                                {subscription.attributes.perks.map(perk => (
                                  <div className="flex items-center gap-2">
                                    <FaCheck className="w-3 h-3" />
                                    <p className="text-sm">{perk}</p>
                                  </div>
                                ))}
                              </div>

                              <button
                                className={cn(
                                  subscription.attributes.is_recommended
                                    ? "bg-gradient-to-b from-[#14B8A6] to-[#0F766E] text-white border-transparent"
                                    : "bg-tertiary-base-dark border-primary-border",
                                  "mt-auto p-2 text-sm font-medium rounded-lg  border  hover:bg-primary-dark/50 hover:border-primary-dark transition-all"
                                )}
                                onClick={() => handleClickUnlock(subscription)}
                              >
                                Unlock Learning
                              </button>
                            </div>
                          </div>
                        )
                      })}
                    </div>
                  </div>
                </Dialog.Panel>
              </div>
            </Dialog>
          </Transition>
        </>
      )}
    </>
  )
}

export default UnlockLearningPathButton
