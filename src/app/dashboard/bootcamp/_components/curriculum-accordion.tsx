'use client';
import TOOL_LIST from "@/lib/constants/tool-list";
import { Disclosure } from "@headlessui/react"
import { CheckCircleIcon, ChevronDownIcon, Squares2X2Icon } from "@heroicons/react/16/solid";

type CurriculumAccordionProps = {
  phaseTitle: string;
  phasePeriod: string;
  phaseDescription: string;
  materialTitle: string;
  materialDescription: string;
  tools: string[];
}

export const CurriculumAccordion = (props: CurriculumAccordionProps) => {
  const {
    phaseTitle,
    phasePeriod,
    phaseDescription,
    materialTitle,
    materialDescription,
    tools
  } = props;

  return <Disclosure as={"div"} className="bg-secondary-base dark:bg-secondary-base-dark rounded-lg border border-primary-border">
    <Disclosure.Button as={"div"} className="flex gap-4 items-center p-4 cursor-pointer">
      <ChevronDownIcon className="w-5 h-5 text-secondary-content dark:text-secondary-content-dark" />
      <span className="flex-1 text-base font-semibold text-primary-content dark:text-primary-content-dark">{phaseTitle}</span>
      <span className="text-sm text-secondary-content dark:text-secondary-content-dark">{phasePeriod}</span>
    </Disclosure.Button>
    <Disclosure.Panel as={"div"} className="flex flex-col gap-4 p-4 border-t border-primary-border text-secondary-content dark:text-secondary-content-dark">
      {/* Description */}
      <h5 className="text-base text-primary-content dark:text-primary-content-dark">Kurikulum yang Dipelajari</h5>
      <p className="text-sm">{phaseDescription}</p>
      {/* Material Title */}
      <div className="flex gap-2 items-center">
        <CheckCircleIcon className="w-5 h-5 text-primary dark:text-primary-dark" />
        <h5 className="text-base text-primary-content dark:text-primary-content-dark">{materialTitle}</h5>
      </div>
      <p className="text-sm">{materialDescription}</p>
      {/* Tools */}
      <div className="flex gap-2 items-center">
        <Squares2X2Icon className="w-5 h-5 text-primary dark:text-primary-dark" />
        <h5 className="text-base text-primary-content dark:text-primary-content-dark">Tools</h5>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {tools.map((tool, idx) => {
          const { name, logo } = TOOL_LIST[tool];

          if (!name || !logo) return null;

          return <div
            key={`tool-${idx}`}
            className="flex flex-col items-center gap-2 p-3 text-sm bg-tertiary-base dark:bg-tertiary-base-dark border border-primary-border rounded-lg"
          >
            <div className="flex justify-center items-center h-16 aspect-square">
              <img className="w-full" src={logo} />
            </div>
            <p className="block w-full text-center text-sm text-secondary-content dark:text-secondary-content-dark line-clamp-1 text-ellipsis whitespace-nowrap">{name}</p>
          </div>
        })}
      </div>
    </Disclosure.Panel>
  </Disclosure>
}