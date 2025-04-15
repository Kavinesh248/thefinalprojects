const ReferralContainer = function ({ setShowReferral }) {
  const handleModalClick = (e) => {
    e.stopPropagation();
  };

  return (
    <div
      className="fixed inset-0 z-10 flex items-center justify-center bg-black/50 backdrop-blur-sm"
      onClick={() => setShowReferral(false)}
    >
      <div
        className="animate-pop relative mx-4 w-[30rem] scale-100 transform rounded-lg bg-white p-8 text-black shadow-lg transition-all duration-300 md:w-[50rem]"
        onClick={handleModalClick}
      >
        <p className="mt-4 mb-4 text-[1.5rem] font-medium sm:text-[1.7rem]">
          Join the finalprojects referral program and earn exclusive rewards for
          every friend you refer! 🎉 It's simple: Fill out the form below with
          your name and your friend's name and contact number, and if your
          friend joins us with your reference — you will get up to ₹1000 in
          cashback 💸 or discounts on the project you choose. The more friends
          you refer, the bigger your rewards! 🏆
        </p>
        <p className="mb-6 text-[1.3rem] font-medium text-[#333333] sm:text-[1.4rem] md:text-[1.5rem]">
          Don't miss out on this opportunity to earn while helping your friends
          discover finalprojects. 🤝
        </p>
        <button
          onClick={() => setShowReferral(false)}
          className="absolute top-2 right-1 cursor-pointer rounded-full bg-[#666666] p-2 text-xl font-semibold text-white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6 md:size-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M6 18 18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ReferralContainer;
