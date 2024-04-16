type MentorCardProps = {
  mentorImage: string;
  mentorName: string;
  mentorDescription: string;
};

export const MentorCard = (props: MentorCardProps) => {
  return <>
    <div className="flex items-center gap-4 p-4 bg-secondary-base dark:bg-secondary-base-dark border border-primary-border rounded-lg">
      <img
        className="inline-block h-10 w-10 rounded-full"
        src={props.mentorImage}
        alt={`${props.mentorName} Image`}
      />
      <div>
        <div className="text-base font-medium text-primary-content dark:text-primary-content-dark">
          {props.mentorName}
        </div>
        <div className="text-sm text-secondary-content dark:text-secondary-content-dark">
          {props.mentorDescription}
        </div>
      </div>
    </div>
  </>
}