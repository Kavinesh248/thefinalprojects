import { useNavigate } from "react-router-dom";
import { assets } from "../../assets/assets";

const Sidebar = function ({
  isVisible,
  setIsSidebarVisible,
  setIsOverlayVisible,
}) {
  const navigate = useNavigate();

  const handleNavigation = (path) => {
    navigate(path);
    setIsSidebarVisible(false);
    setIsOverlayVisible(false);
  };

  return (
    <div
      className={`flex h-screen w-[20rem] flex-col items-center rounded-tr-4xl bg-[var(--bg-secondary)] py-12 text-white transition-transform duration-300 ease-in-out sm:w-[25rem] md:w-[30rem] lg:w-[24rem] lg:py-16 ${
        isVisible
          ? "absolute top-0 left-0 z-999 -translate-x-0"
          : "absolute -translate-x-full"
      } lg:sticky lg:top-0 lg:z-20 lg:row-span-2 lg:row-start-1 lg:translate-x-0`}
    >
      <img
        src={assets.logo}
        className="w-[12rem] sm:w-[15rem] md:w-[18rem]"
        alt="brand logo"
      />

      <ul className="mt-[4rem] flex flex-col gap-[1.8rem] text-[1.6rem] tracking-wide md:mt-[4.8rem] md:text-[1.8rem]">
        <li
          className="list listActive"
          onClick={() => handleNavigation("/dashboard")}
        >
          <ion-icon name="home"></ion-icon>
          <span>Dashboard</span>
        </li>
        <li className="list" onClick={() => handleNavigation("/mylearning")}>
          <ion-icon name="play"></ion-icon>
          <span>My Learning</span>
        </li>
        <li className="list">
          <ion-icon name="calendar-number"></ion-icon>
          <span>Future Projects</span>
        </li>
        <li className="list">
          <ion-icon name="calendar-number"></ion-icon>
          <span>Referral Program</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
