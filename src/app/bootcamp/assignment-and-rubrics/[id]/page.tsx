import { getSinglePost } from "@/lib/notion";
import React from "react";
import AssignmentAndRubricTab from "./_components/tab";

type ParamsProps = {
  id: string;
};

type Props = {
  params?: ParamsProps;
};

export default async function DynamicAssignmentPage({ params }: Props) {
  const id = params?.id;
  const assignment = await fetchAssigmentData("de-phase-1-assigment-1");
  const rubric = await fetchAssigmentData("de-phase-1-rubric-1");

  return (
    <div className="max-w-2xl space-y-2">
      <div>
        <AssignmentAndRubricTab
          assignment={assignment.content}
          rubric={rubric.content}
        />
      </div>
    </div>
  );
}

async function fetchAssigmentData(slug: string) {
  const res = getSinglePost(slug);
  return res;
}
