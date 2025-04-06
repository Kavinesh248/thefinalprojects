import { assets } from "../assets/assets";
import Tabbed from "../components/Tabbed/Tabbed";

const Learning = function () {
  return (
    <div>
      <div className="mb-16 flex items-center justify-between text-white">
        <h1 className="text-[1.6rem] font-semibold text-white">
          Web Development
        </h1>

        <button className="rounded-lg bg-[var(--bg--primary-orange)] px-4 py-2 text-[1.4rem]">
          Contact US
        </button>
      </div>
      <div className="text-white">
        <div className="w-[100%] max-w-[2000px]">
          <video
            src={assets.demoVideo1}
            controls
            className="mb-4 w-full"
          ></video>
          <h1 className="text-[1.6rem] font-semibold text-white">
            Motion Technology Web Development
          </h1>
        </div>
        <div className="mt-6 rounded-lg bg-[var(--bg-secondary)] p-4 text-[1.8rem] text-white">
          <Tabbed />
        </div>
      </div>
    </div>
  );
};

export default Learning;
