import { assets } from "../../assets/assets";

const Welcome = function () {
  return (
    <div className="mb-18 flex items-center rounded-lg bg-[linear-gradient(288.17deg,#45108A_2.3%,#3D065F_29.86%,#10054D_101.35%)] px-8 py-6 text-center text-[2rem] font-medium text-white md:px-10 md:py-8 md:text-[2.6rem] xl:px-12 xl:py-10 xl:text-[2.4rem]">
      <div className="flex-grow text-left">
        <span className="md:tracking-wide">Welcome Back, Santhosh Gay</span>
        <p className="hidden text-[1.4rem] font-normal md:block md:text-[1.6rem] lg:text-[1.8rem]">
          Just one step away to get your maximum Internal points.
        </p>
      </div>
      <img src={assets.laptop} alt="laptop" className="hidden md:block" />
    </div>
  );
};

export default Welcome;
