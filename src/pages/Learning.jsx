import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { useCategory } from "../utils/useCategory";
import HeaderContent from "../components/HeaderContent/HeaderContent";
import ProjectContent from "../components/ProjectContent/ProjectContent";
import CustomAccordion from "../components/Accordion/Accordion";
import Tabbed from "../components/Tabbed/Tabbed";

const Learning = function () {
  const { isLoading, dispatch, currentProject, currentCategoryName, projects } =
    useCategory();
  const navigate = useNavigate();

  const [expandedAccordion, setExpandedAccordion] = useState(null);
  const displayProject = projects && currentProject;

  const handleAccordionChange = (panelId) => {
    setExpandedAccordion((prev) => (prev === panelId ? null : panelId));
  };

  if (isLoading) {
    return <div className="p-4 text-white">Loading categories...</div>;
  }

  return (
    <div className="xl:grid xl:grid-cols-[1fr_1fr_1fr] xl:grid-rows-[auto_1fr] xl:gap-[1.8rem]">
      <div className="col-span-2 text-white">
        {displayProject && (
          <HeaderContent category={currentCategoryName} pdf={assets.aiPdf} />
        )}
        {displayProject ? (
          <ProjectContent currentProject={currentProject} />
        ) : (
          <div className="text-[1.6rem] font-semibold text-white lg:mt-14 lg:text-[3.2rem]">
            No projects available. Will be available soon explore other
            categories 🚀
            <button
              className="mt-8 block cursor-pointer bg-[var(--bg--primary-orange)] px-4 py-2 text-[1.4rem]"
              onClick={() => navigate("/")}
            >
              Go to dashboard &rarr;
            </button>
          </div>
        )}
      </div>

      {displayProject && (
        <div className="hidden h-[53rem] text-white xl:block">
          <div className="flex h-full flex-col gap-7 xl:overflow-y-scroll [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-[var(--bg--primary-orange)] [&::-webkit-scrollbar-track]:bg-gray-100">
            {Object.entries(projects).map((project) => (
              <CustomAccordion
                key={project[0]}
                project={project}
                dispatch={dispatch}
                expanded={expandedAccordion === project[0]}
                handleChange={() => handleAccordionChange(project[0])}
              />
            ))}
          </div>
        </div>
      )}

      {displayProject && (
        <div className="col-span-3 mt-6 h-[40rem] rounded-lg bg-[var(--bg-secondary)] p-4 text-[1.8rem] text-white md:h-[60rem]">
          <Tabbed
            dispatch={dispatch}
            projects={projects}
            currentProject={currentProject}
          />
        </div>
      )}
    </div>
  );
};

export default Learning;
