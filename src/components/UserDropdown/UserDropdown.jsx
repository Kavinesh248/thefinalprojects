const UserDropdown = function () {
  return (
    <div className="absolute top-[3.6rem] right-0 z-50 flex w-[24rem] flex-col gap-4 bg-white p-4 text-[1.344rem] font-medium text-black sm:top-[4.4rem] md:top-[4.8rem] md:gap-6 md:text-[1.5rem]">
      <div>
        <p>Santhosh m</p>
        <p>santhoshgay@gmail.com</p>
      </div>
      <p className="cursor-pointer hover:underline">Refresh</p>
      <p className="cursor-pointer hover:underline">Logout</p>
    </div>
  );
};

export default UserDropdown;
