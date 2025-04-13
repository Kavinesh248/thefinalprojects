import { getYouTubeEmbedUrl } from "../../utils/getYouTubeEmbedUrl";
import { useCategory } from "../../utils/useCategory";

const ProjectContent = function () {
  const { currentProject } = useCategory();

  const embedUrl = currentProject?.video_url
    ? getYouTubeEmbedUrl(currentProject.video_url)
    : null;

  return (
    <div className="mb-12 aspect-video w-[100%] max-w-[2000px]">
      <div className="mb-6 h-full w-full">
        <iframe
          className="h-full w-full object-cover"
          src={embedUrl}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>

      <h1 className="text-[1.6rem] font-semibold text-white sm:text-[1.8rem] md:mt-4 xl:text-[2.4rem]">
        {currentProject.title}
      </h1>
    </div>
  );
};

export default ProjectContent;
