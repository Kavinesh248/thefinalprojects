import { assets } from "../assets/assets";
import CategoryCard from "../components/CategoryCard/CategoryCard";

const Dashboard = function () {
  return (
    <div className="py-10 text-white md:py-12 lg:py-16 xl:py-20">
      <h1 className="mb-4 text-[1.6rem] font-medium sm:mb-6 md:text-[1.8rem] lg:mb-6 xl:text-[2rem]">
        Project Categories
      </h1>
      <div className="grid gap-[1.8rem] sm:grid-cols-2 md:gap-[2.4rem] lg:gap-[2.8rem] xl:grid-cols-3">
        <CategoryCard
          category="Web Development Projects 🧑‍💻"
          img={assets.webDevImage}
        />
        <CategoryCard category="AI Projects 🤖" img={assets.aiImage} />
        <CategoryCard category="ML Projects 🦾" img={assets.mlImage} />
      </div>
    </div>
  );
};

export default Dashboard;
