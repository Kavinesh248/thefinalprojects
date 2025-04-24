import CategoryCard from "../components/CategoryCard/CategoryCard";
import Welcome from "../components/Welcome/Welcome";
import { useCategory } from "../utils/useCategory";

const Dashboard = function () {
  const { categories, isLoading, dispatch } = useCategory();

  if (isLoading) {
    return <div className="loader"></div>;
  }

  return (
    <div className="text-white md:py-4 lg:py-4 xl:px-28 xl:py-8">
      <Welcome />
      <h1 className="mb-4 text-[1.6rem] font-medium sm:mb-6 md:text-[2rem] lg:mb-6 xl:text-[2rem]">
        Project Categories
      </h1>
      <div className="grid gap-[1.8rem] sm:grid-cols-2 md:gap-[2.4rem] lg:gap-[2.8rem] xl:grid-cols-3">
        {Object.values(categories).map((category, index) => (
          <CategoryCard
            key={category.name}
            category={category}
            dispatch={dispatch}
            isLCP={index === 0}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
