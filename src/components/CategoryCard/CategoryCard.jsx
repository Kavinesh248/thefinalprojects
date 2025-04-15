import { useNavigate } from "react-router-dom";
import React from "react";
import { getProjects } from "../../services/apiCategory";

const CategoryCard = React.memo(function ({
  category,
  dispatch,
  defaultImg,
  defaultCategory,
  defaultName,
}) {
  const navigate = useNavigate();

  const handleViewAll = async () => {
    try {
      const projectsData = await getProjects(category.name);

      if (projectsData)
        dispatch({
          type: "SET_PROJECTS",
          payload: projectsData || [],
        });
      dispatch({ type: "SET_CURRENT_CATEGORY", payload: category.name });
      dispatch({ type: "SET_CURRENT_PROJECT", payload: projectsData[0] });
      window.scrollTo({ top: 0, behavior: "smooth" });
      navigate(`/mylearning?category=${encodeURIComponent(category.name)}`);
    } catch (error) {
      console.error("Failed to fetch projects:", error);
    }
  };

  return (
    <div className="w-full overflow-hidden rounded-lg bg-[var(--bg-secondary)] px-6 py-5 text-white lg:p-6">
      <div className="relative h-64 w-full overflow-hidden rounded-lg bg-[#1e1e1e]">
        <img
          src={category?.category_poster_url || defaultImg}
          alt="content"
          loading="lazy"
          className="h-full w-full animate-pulse bg-[#1e1e1e] object-cover blur-sm transition-transform duration-300 ease-in-out hover:scale-110"
          onLoad={(e) =>
            e.currentTarget.classList.remove("blur-sm", "animate-pulse")
          }
        />
      </div>

      <div className="pt-6 text-[1.5rem] md:text-[1.6rem]">
        <p className="mb-[1.2rem] text-[1.2rem] text-[#74c0fc]">Bundle pack</p>

        <h1 className="mb-[1.6rem] text-[1.6rem]">
          {category?.name || defaultName}{" "}
          {category?.description || defaultCategory}
        </h1>

        <button className="btn w-full" onClick={handleViewAll}>
          <ion-icon name="play-circle"></ion-icon> <span>View All</span>
        </button>
      </div>
    </div>
  );
});

export default CategoryCard;
