import { assets } from "../assets/assets";
import Tabbed from "../components/Tabbed/Tabbed";
import Accordion from "../components/Accordion/Accordion";
import HeaderContent from "../components/HeaderContent/HeaderContent";
import ProjectContent from "../components/ProjectContent/ProjectContent";
import { useCategory } from "../utils/useCategory";

const Learning = function () {
  const { isLoading, dispatch, currentProject, currentCategoryName, projects } =
    useCategory();

  if (isLoading) {
    return <div className="p-4 text-white">Loading categories...</div>;
  }

  return (
    <div className="xl:grid xl:grid-cols-[1fr_1fr_1fr] xl:grid-rows-[auto_1fr] xl:gap-[1.8rem]">
      <div className="col-span-2 text-white">
        <HeaderContent category={currentCategoryName} pdf={assets.aiPdf} />
        <ProjectContent currentProject={currentProject} />
      </div>
      <div className="hidden h-[53rem] text-white xl:block">
        <div className="flex h-full flex-col gap-7 xl:overflow-y-scroll [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-[var(--bg--primary-orange)] [&::-webkit-scrollbar-track]:bg-gray-100">
          {Object.entries(projects).map((project) => (
            <Accordion project={project} />
          ))}
        </div>
      </div>
      <div className="col-span-3 mt-6 rounded-lg bg-[var(--bg-secondary)] p-4 text-[1.8rem] text-white">
        <Tabbed
          dispatch={dispatch}
          projects={projects}
          currentProject={currentProject}
        />
      </div>
    </div>
  );
};

export default Learning;
