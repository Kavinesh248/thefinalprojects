import { assets } from "../../assets/assets";

const ProjectVideoCard = function () {
  return (
    <div className="rounded-lg bg-[#353535] p-5">
      <div className="curosr-pointer relative w-full overflow-hidden">
        <img
          src={assets.aiImage}
          alt="img"
          className="w-full rounded-lg object-cover"
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
        <h1 className="font-md text-[1.4rem]">LAB</h1>
        <p className="text-[1.4rem] text-[var(--bg--primary-orange)] sm:text-[1.6rem]">
          Connect with SNA Lab
        </p>

        <span className="mt-5 inline-block text-[1.2rem] text-[var(--text-secondary)]">
          Uploaded | Jun 08 2022
        </span>
      </div>
    </div>
  );
};

export default ProjectVideoCard;
