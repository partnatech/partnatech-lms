import React from "react";
import PracticeSection from "./_components/practice-section";
import MentoringSection from "./_components/mentoring-section";

type ParamsProps = {
  id: string;
  type: string;
};

type Props = {
  params?: ParamsProps;
};

const DynamicPracticePage = ({ params }: Props) => {
  const id = params?.id;
  const type = params?.type;
  return (
    <div className="max-w-2xl space-y-2">
      {type === "practice" ? <PracticeSection /> : <MentoringSection />}
    </div>
  );
};

export default DynamicPracticePage;
