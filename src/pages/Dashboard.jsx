import { assets } from "../assets/assets";
import CategoryCard from "../components/CategoryCard/CategoryCard";
import Welcome from "../components/Welcome/Welcome";

const Dashboard = function () {
  return (
    <div className="text-white md:py-4 lg:py-4 xl:px-28 xl:py-8">
      <Welcome />
      <h1 className="mb-4 text-[1.6rem] font-medium sm:mb-6 md:text-[2rem] lg:mb-6 xl:text-[2rem]">
        Project Categories
      </h1>
      <div className="grid gap-[1.8rem] sm:grid-cols-2 md:gap-[2.4rem] lg:gap-[2.8rem] xl:grid-cols-3">
        <CategoryCard
          category="Web Development Projects 🧑‍💻"
          img={assets.webDevImage}
        />
        <CategoryCard category="AI Projects 🤖" img={assets.aiImage} />
        <CategoryCard category="ML Projects 🦾" img={assets.mlImage} />
        <CategoryCard category="Python Projects 🐍" img={assets.python} />
        <CategoryCard category="PHP Projects 🅿️" img={assets.php} />
        <CategoryCard
          category="Deep Learning Projects 📖"
          img={assets.deepLearning}
        />
      </div>
    </div>
  );
};

export default Dashboard;
