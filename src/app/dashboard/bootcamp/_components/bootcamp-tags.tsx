const BootcampTags = ({ tags }: { tags: string[] }) => {
  return (
    <div className="flex flex-wrap gap-4">
      {tags.map((tag, idx) => (
        <span key={`tag-${idx}`} className="text-sm text-secondary-content dark:text-secondary-content-dark bg-tertiary-base dark:bg-tertiary-base-dark px-2 py-1 rounded">
          {tag}
        </span>
      ))}
    </div>
  );
}

export default BootcampTags;