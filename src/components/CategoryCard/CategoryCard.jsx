import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getProjects } from "../../services/apiCategory";

const CategoryCard = React.memo(function ({
  category,
  dispatch,
  defaultImg,
  defaultCategory,
  defaultName,
  isLCP = false,
}) {
  const navigate = useNavigate();

  // ✅ Dynamically preload the LCP image
  useEffect(() => {
    if (!isLCP) return;

    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = `${category?.category_poster_url || defaultImg}?tr=w-500,h-300`;
    document.head.appendChild(link);

    return () => document.head.removeChild(link);
  }, [isLCP, category, defaultImg]);

  const handleViewAll = async () => {
    try {
      const projectsData = await getProjects(category.name);
      if (projectsData)
        dispatch({ type: "SET_PROJECTS", payload: projectsData || [] });
      dispatch({ type: "SET_CURRENT_CATEGORY", payload: category.name });
      dispatch({ type: "SET_CURRENT_PROJECT", payload: projectsData[0] });
      navigate(`/mylearning?category=${encodeURIComponent(category.name)}`);
    } catch (error) {
      console.error("Failed to fetch projects:", error);
    }
  };

  return (
    <div className="w-full overflow-hidden rounded-lg bg-[var(--bg-secondary)] px-6 py-5 text-white lg:p-6">
      <div className="relative h-64 w-full overflow-hidden rounded-lg bg-[#1e1e1e]">
        <picture>
          <source
            media="(max-width: 500px)"
            srcSet={`${category?.category_poster_url || defaultImg}?tr=w-350,h-200`}
          />
          <img
            loading="eager"
            fetchpriority="high"
            src={`${category?.category_poster_url || defaultImg}?tr=w-500,h-300`}
            alt="content"
            className="h-full w-full bg-[#1e1e1e] object-cover transition-transform duration-300 ease-in-out hover:scale-110"
          />
        </picture>
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
