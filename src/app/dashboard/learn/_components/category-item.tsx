"use client";

import qs from "query-string";
import { cn } from "../../../../utils/cn";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

interface CategoryItemProps {
  label: string;
  value?: string;
}

const CategoryItem = ({ label, value }: CategoryItemProps) => {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentCategoryId = searchParams.get("categoryId");

  const isSelected = currentCategoryId === value;

  const onClick = () => {
    const url = qs.stringifyUrl(
      {
        url: pathname,
        query: {
          categoryId: isSelected ? null : value,
        },
      },
      { skipNull: true, skipEmptyString: true }
    );

    router.push(url);
  };

  return (
    <button
      onClick={onClick}
      className={cn(
        "px-3 py-1 text-sm font-medium text-neutral-600 bg-gray-100 dark:bg-gray-800 dark:text-gray-50 rounded-md shrink-0",
        isSelected && "bg-indigo-50 text-indigo-600 dark:bg-indigo-600 dark:text-gray-100" // TODO: Set active by selected tags
      )}
      type="button"
    >
      {label}
    </button>
  );
};

export default CategoryItem;
