import { NavLink } from "react-router-dom";
import { assets } from "../../assets/assets";
import NavItem from "../NavItem/NavItem";

const Sidebar = function ({
  isVisible,
  setIsSidebarVisible,
  setIsOverlayVisible,
}) {
  const handleCloseSidebar = () => {
    setIsSidebarVisible(false);
    setIsOverlayVisible(false);
  };

  return (
    <div
      className={`flex h-screen w-[20rem] flex-col items-center rounded-tr-4xl bg-[var(--bg-secondary)] py-12 text-white transition-transform duration-300 ease-in-out sm:w-[25rem] md:w-[30rem] lg:w-[24rem] lg:py-16 ${
        isVisible
          ? "fixed top-0 left-0 z-999 -translate-x-0"
          : "fixed z-999 -translate-x-full"
      } lg:sticky lg:top-0 lg:z-20 lg:row-span-2 lg:row-start-1 lg:translate-x-0`}
    >
      <NavLink to="/">
        <img
          src={assets.logo}
          className="w-[12rem] sm:w-[15rem] md:w-[18rem]"
          alt="brand logo"
          onClick={handleCloseSidebar}
        />
      </NavLink>

      <ul className="mt-[4rem] flex flex-col gap-[1.8rem] text-[1.6rem] tracking-wide md:mt-[4.8rem] md:text-[1.8rem]">
        <NavItem
          to="/dashboard"
          onClick={handleCloseSidebar}
          icon="home"
          label="Dashboard"
        />
        <NavItem
          to="/mylearning"
          icon="play"
          label="My Projects"
          onClick={handleCloseSidebar}
        />
        <NavItem
          to="/futureprojects"
          icon="calendar-number"
          label="Future Projects"
          onClick={handleCloseSidebar}
        />
        <NavItem
          to="/referral"
          icon="calendar-number"
          label="Referral Program"
          onClick={handleCloseSidebar}
        />
      </ul>
    </div>
  );
};

export default Sidebar;
