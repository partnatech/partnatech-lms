import { Category } from "@prisma/client";
import CategoryItem from "./category-item";

interface CategoryListProps {
	categories: Category[],
}

const CategoryList = ({
  categories,
}: CategoryListProps) => {
	return (
		<div className="flex items-center overflow-x-auto space-x-4">
			{categories.map((category, index) => (
				<CategoryItem
					key={index}
					label={category.name}
					value={category.id}
				/>
			))}
		</div>
	)
}

export default CategoryList;
