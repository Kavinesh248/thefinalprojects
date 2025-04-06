const NotificationDropDown = function () {
  return (
    <div className="absolute top-[3rem] right-0 z-50 flex w-[13rem] flex-col items-center bg-white p-4 text-[1.4rem] font-medium text-black md:top-[3.8rem] md:w-[15rem] md:p-6 md:text-[1.6rem]">
      <ion-icon name="notifications-off-outline" className="h-[1.6rem]" />
      No notifications
    </div>
  );
};

export default NotificationDropDown;
