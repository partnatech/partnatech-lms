interface PracticeSectionProps {
  practice: string;
}

const PracticeSection = ({ practice }: PracticeSectionProps) => {
  return (
    <div className="max-w-2xl space-y-2">
      <div
        className="prose dark:!prose-invert"
        dangerouslySetInnerHTML={{ __html: practice }}
      ></div>
    </div>
  );
};

export default PracticeSection;
