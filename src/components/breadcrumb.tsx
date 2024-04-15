import clsx from "clsx";

export type BreadcrumbPage = {
  name: string,
  href: string,
  current: boolean
}

type BreadcrumbProps = {
  pages: Array<BreadcrumbPage>
}

export const Breadcrumb = (props: BreadcrumbProps) => {
  const { pages } = props;

  return (
    <nav className="flex" aria-label="Breadcrumb">
      <ol role="list" className="flex items-center">
        {pages.map((page, idx) => (
          <li key={page.name}>
            <div className="flex items-center">
              {idx === 0
                ? null
                : (
                  <svg
                    className="mx-2 h-4 w-4 flex-shrink-0 text-primary-content dark:text-primary-content-dark"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path d="M5.555 17.776l8-16 .894.448-8 16-.894-.448z" />
                  </svg>
                )
              }
              <a
                href={page.href}
                className={clsx(
                  "text-xs",
                  page.current
                    ? "text-primary-content dark:text-primary-content-dark"
                    : "text-secondary-content hover:text-primary-content dark:hover:text-primary-content-dark",
                )}
                aria-current={page.current ? 'page' : undefined}
              >
                {page.name}
              </a>
            </div>
          </li>
        ))}
      </ol>
    </nav>
  )
}
