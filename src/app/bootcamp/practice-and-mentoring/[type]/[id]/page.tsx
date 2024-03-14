import React from "react";
import PracticeSection from "./_components/practice-section";
import MentoringSection from "./_components/mentoring-section";
import { getSinglePost } from "@/lib/notion";

type ParamsProps = {
  id: string;
  type: string;
};

type Props = {
  params?: ParamsProps;
};

export default async function DynamicPracticePage({ params }: Props) {
  const id = params?.id;
  const type = params?.type;
  const practice = await fetchPracticeData("de-practice-1");
  return (
    <div className="max-w-2xl space-y-2">
      {type === "practice" ? (
        <PracticeSection practice={practice.content} />
      ) : (
        <MentoringSection />
      )}
    </div>
  );
}

async function fetchPracticeData(slug: string) {
  const res = getSinglePost(slug);
  return res;
}
