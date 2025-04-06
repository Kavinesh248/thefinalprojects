import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import { useEffect, useState } from "react";

const Home = function () {
  const [isSidebarVisible, setIsSidebarVisible] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  useEffect(() => {
    if (isSidebarVisible) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }

    return () => {
      document.body.classList.remove("overflow-hidden");
    };
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
          <Outlet />
        </article>
      </div>
    </main>
  );
};

export default Home;

{
  /* <main className="min-h-screen bg-black lg:grid lg:grid-cols-[auto_1fr] lg:grid-rows-[auto_1fr]">
      <Navbar
        setIsSidebarVisible={setIsSidebarVisible}
        isOverlayVisible={isOverlayVisible}
        setIsOverlayVisible={setIsOverlayVisible}
      />
      <Sidebar
        isVisible={isSidebarVisible}
        setIsSidebarVisible={setIsSidebarVisible}
        setIsOverlayVisible={setIsOverlayVisible}
      />
      <article className="p-8 md:p-12 xl:py-6">
        <Outlet />
      </article>
    </main> */
}
