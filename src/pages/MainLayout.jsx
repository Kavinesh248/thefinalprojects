import { Outlet } from "react-router-dom";
import { lazy, useEffect, useState } from "react";
import { CategoryProvider } from "../contexts/CategoryContext";

const Navbar = lazy(() => import("../components/Navbar/Navbar"));
const Sidebar = lazy(() => import("../components/Sidebar/Sidebar"));

const MainLayout = () => {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  useEffect(() => {
    if (isSidebarVisible) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => document.body.classList.remove("overflow-hidden");
  }, [isSidebarVisible]);

  return (
    <main className="h-full min-h-screen bg-black lg:grid lg:grid-cols-[24rem_1fr]">
      <Sidebar
        isVisible={isSidebarVisible}
        setIsSidebarVisible={setIsSidebarVisible}
        setIsOverlayVisible={setIsOverlayVisible}
      />
      <div className="h-full lg:flex lg:flex-col">
        <div className="sticky top-0 z-10">
          <Navbar
            setIsSidebarVisible={setIsSidebarVisible}
            isOverlayVisible={isOverlayVisible}
            setIsOverlayVisible={setIsOverlayVisible}
          />
        </div>
        <article className="flex-1 overflow-y-auto p-8 md:p-12 xl:py-6">
          <CategoryProvider>
            <Outlet />
          </CategoryProvider>
        </article>
      </div>

      <a
        href="https://wa.me/919895682065"
        target="_blank"
        rel="noreferrer noopener"
        className="fixed right-10 bottom-10 z-50 flex cursor-pointer items-center gap-2 rounded-full bg-white p-4 text-[1.2rem] font-semibold text-[var(--bg--primary-orange)] sm:rounded-lg sm:px-6 sm:py-4 sm:text-[1.5rem] lg:text-[1.8rem]"
      >
        <span className="hidden sm:block">Chat with us</span>
        <ion-icon
          name="logo-whatsapp"
          className="text-[3rem] sm:text-[1.9rem]"
        ></ion-icon>
      </a>
    </main>
  );
};

export default MainLayout;
