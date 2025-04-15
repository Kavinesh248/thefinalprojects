import { memo } from "react";

const ProjectVideoCard = memo(function ({ project, dispatch }) {
  const handleSetCurrentProject = () => {
    dispatch({
      type: "SET_CURRENT_PROJECT",
      payload: project,
    });
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="cursor-pointer rounded-lg bg-[#353535] p-5"
      onClick={handleSetCurrentProject}
    >
      <div className="curosr-pointer relative aspect-[16/9] w-full overflow-hidden">
        <img
          src={project.thumbnail_url}
          alt="img"
          loading="lazy"
          className="w-full animate-pulse rounded-lg object-cover blur-sm"
          onLoad={(e) =>
            e.currentTarget.classList.remove("blur-sm", "animate-pulse")
          }
        />

        <div className="absolute inset-0 z-5 rounded-lg bg-black/40"></div>

        <div className="absolute inset-0 z-50 flex items-center justify-center">
          <div className="flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[var(--bg--primary-orange)]">
            <ion-icon
              name="play"
              className="ml-2 text-[2rem] text-white"
            ></ion-icon>
          </div>
        </div>
      </div>

      <div className="mt-4 p-2">
        <h1 className="font-md mb-2 text-[1.3rem]">{project.category}</h1>
        <p className="text-[1.4rem] text-[var(--bg--primary-orange)] sm:text-[1.6rem]">
          {project.title}
        </p>

        <span className="mt-5 inline-block text-[1.2rem] text-[var(--text-secondary)]">
          Uploaded by admin 🧑‍💻
        </span>
      </div>
    </div>
  );
});

export default ProjectVideoCard;
