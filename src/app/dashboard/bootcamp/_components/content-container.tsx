type ContentContainerProps = {
  id: string;
  children?: React.ReactNode;
  title: string;
};

export const ContentContainer = (props: ContentContainerProps) => {
  const {
    id,
    children,
    title
  } = props;

  return <div id={id}>
    <h2 className="text-2xl font-semibold text-primary-content dark:text-primary-content-dark mb-4">{title}</h2>
    {children || null}
  </div>
}