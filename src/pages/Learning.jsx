import { assets } from "../assets/assets";
import Tabbed from "../components/Tabbed/Tabbed";
import Accordion from "../components/Accordion/Accordion";

const Learning = function () {
  return (
    <div className="xl:grid xl:grid-cols-[1fr_1fr_1fr] xl:grid-rows-[auto_1fr] xl:gap-[1.8rem]">
      <div className="col-span-2 text-white">
        <div className="mb-16 flex items-center justify-between text-white">
          <h1 className="text-[1.6rem] font-semibold text-white sm:text-[1.8rem] md:text-[2rem] xl:text-[2.4rem]">
            Web Development
          </h1>

          <a
            href="https://wa.me/919361886282"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button className="flex cursor-pointer items-center gap-2 rounded-lg bg-[var(--bg--primary-orange)] px-4 py-2 text-[1.4rem] font-medium sm:text-[1.5rem] xl:text-[1.6rem]">
              <span>Contact Us</span>
              <ion-icon name="logo-whatsapp"></ion-icon>
            </button>
          </a>
        </div>
        <div className="mb-12 w-[100%] max-w-[2000px]">
          <video
            src={assets.demoVideo1}
            controls
            className="mb-4 w-full"
          ></video>
          <h1 className="text-[1.6rem] font-semibold text-white sm:text-[1.8rem] md:mt-4 xl:text-[2.4rem]">
            Motion Technology Web Development
          </h1>
        </div>
      </div>
      <div className="hidden h-[53rem] text-white xl:block">
        <div className="flex h-full flex-col gap-7 xl:overflow-y-scroll [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:bg-[var(--bg--primary-orange)] [&::-webkit-scrollbar-track]:bg-gray-100">
          <Accordion />
          <Accordion />
          <Accordion />
          <Accordion />
          <Accordion />
          <Accordion />
          <Accordion />
          <Accordion />
          <Accordion />
          <Accordion />
          <Accordion />
          <Accordion />
          <Accordion />
          <Accordion />
          {/* ...other accordions */}
        </div>
      </div>
      <div className="col-span-3 mt-6 rounded-lg bg-[var(--bg-secondary)] p-4 text-[1.8rem] text-white">
        <Tabbed />
      </div>
    </div>
  );
};

export default Learning;
