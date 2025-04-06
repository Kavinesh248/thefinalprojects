import { Link } from "react-router-dom";
import { assets } from "../assets/assets";
import Tabbed from "../components/Tabbed/Tabbed";

const Learning = function () {
  return (
    <div>
      <div className="mb-16 flex items-center justify-between text-white">
        <h1 className="text-[1.6rem] font-semibold text-white sm:text-[1.8rem] md:text-[2rem]">
          Web Development
        </h1>

        <a
          href="https://wa.me/919361886282"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="flex cursor-pointer items-center gap-2 rounded-lg bg-[var(--bg--primary-orange)] px-4 py-2 text-[1.4rem] font-medium sm:text-[1.6rem]">
            <span>Contact Us</span>
            <ion-icon name="logo-whatsapp"></ion-icon>
          </button>
        </a>
      </div>
      <div className="text-white">
        <div className="mb-12 w-[100%] max-w-[2000px]">
          <video
            src={assets.demoVideo1}
            controls
            className="mb-4 w-full"
          ></video>
          <h1 className="text-[1.6rem] font-semibold text-white sm:text-[1.8rem]">
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
