import { useState } from "react";
import { assets } from "../../assets/assets";
import NotificationDropDown from "../NotificationDropDown/NotificationDropDown";
import UserDropdown from "../UserDropdown/UserDropdown";
import Input from "../Input/Input";

const Navbar = ({
  setIsSidebarVisible,
  isOverlayVisible,
  setIsOverlayVisible,
}) => {
  const [isNotificationVisible, setIsNotificationVisible] = useState(false);
  const [isLoginCardVisible, setIsLoginCardVisible] = useState(false);

  const closeAllDropdowns = () => {
    setIsNotificationVisible(false);
    setIsLoginCardVisible(false);
    setIsOverlayVisible(false);
    setIsSidebarVisible(false);
  };

  const toggleSidebar = () => {
    setIsSidebarVisible((prev) => !prev);
    setIsOverlayVisible((prev) => !prev);
  };

  return (
    <>
      {isOverlayVisible && (
        <div
          className="fixed inset-0 z-6 bg-[rgba(0,0,0,0.4)]"
          onClick={closeAllDropdowns}
        ></div>
      )}

      <header className="col-span-3 flex justify-between bg-[var(--bg-secondary)] p-6 text-white sm:p-8 lg:col-start-2 lg:gap-8 lg:border-b-[.0004rem] lg:border-b-[var(--bg--primary-gray)] lg:bg-black lg:px-12 lg:py-8 xl:px-19">
        <div className="flex items-center gap-4 md:gap-6 lg:hidden">
          <ion-icon
            name="menu-outline"
            className="icon"
            onClick={toggleSidebar}
          />
          <img
            src={assets.logo}
            alt="logo"
            className="h-[2.2rem] sm:h-[2.8rem] md:h-[3.2rem]"
          />
          <ion-icon name="search-outline" className="icon" />
        </div>
        <Input />
        <aside className="flex items-center gap-4 md:gap-7 lg:basis-[40%] lg:justify-end xl:gap-10">
          <div className="relative">
            <ion-icon
              name="notifications-outline"
              className="mt-2 h-[1.7rem] w-[1.7rem] cursor-pointer sm:h-[1.8rem] sm:w-[1.8rem] md:mt-3 md:h-[2rem] md:w-[2rem] lg:rounded-[100%] lg:bg-[var(--bg-secondary)] lg:p-3"
              onClick={() => {
                setIsNotificationVisible((prev) => !prev);
                setIsLoginCardVisible(false);
              }}
            />
            {isNotificationVisible && <NotificationDropDown />}
          </div>

          <div className="relative flex items-center gap-4">
            <div
              className="flex h-[3rem] w-[3rem] cursor-pointer items-center justify-center rounded-full bg-orange-50 text-[1.4rem] font-semibold text-orange-700 sm:h-[4rem] sm:w-[4rem] sm:text-[1.8rem]"
              onClick={() => {
                setIsLoginCardVisible((prev) => !prev);
                setIsNotificationVisible(false);
              }}
            >
              S
            </div>
            <p className="hidden text-[1.8rem] md:block">santhosh m</p>
            {isLoginCardVisible && <UserDropdown />}
          </div>
        </aside>
      </header>
    </>
  );
};

export default Navbar;
