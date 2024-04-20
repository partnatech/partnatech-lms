

const ProgressIndicator = ({ percentage }: { percentage: number }) => {
  let progress = Math.round(percentage);

  if (percentage > 100) {
    progress = 100;
  }
  if (percentage < 0) {
    progress = 0;
  }

  return (
    <div className="relative w-full h-2 bg-tertiary-base dark:bg-tertiary-base-dark rounded-full">
      <div
        className="absolute top-0 h-2 bg-primary dark:bg-primary-dark rounded-full"
        style={{ width: `${percentage}%` }}
      />
    </div>
  );
};

export default ProgressIndicator;