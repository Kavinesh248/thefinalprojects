import { useRef, useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";
import CustomInput from "../components/CustomInput/CustomInput";
import { web3FormSubmit } from "../services/web3formSubmit";
import ReferralContainer from "../components/ReferralContainer/ReferralContainer";

function ReferralProgram() {
  const [showReferral, setShowReferral] = useState(false);
  const formRef = useRef();

  useEffect(() => {
    setShowReferral(true);
  }, []);

  const handleSubmit = async (e) => {
    const result = await web3FormSubmit(e, formRef, toast);
    console.log(result);

    if (result.success) {
      e.target.reset();
    }
  };

  return (
    <div className="relative h-full bg-black text-white lg:px-10 lg:py-10">
      <h1 className="mb-6 text-[1.9rem] font-semibold sm:mb-8 sm:text-[2.1rem] md:text-[2.3rem] lg:mb-10 lg:text-[2.4rem] xl:text-[2.6rem]">
        Unlock Exclusive Rewards by Joining thefinalprojects Referral Program 🚀
      </h1>

      <div className="mb-18">
        <p className="mb-3 text-[1.5rem] sm:mb-3 sm:text-[1.6rem] md:text-[1.8rem] lg:text-[1.9rem]">
          Click the button below and learn how this works
        </p>
        <button
          className="flex cursor-pointer items-center gap-1 bg-[var(--bg--primary-orange)] px-4 py-2 text-[1.3rem] sm:text-[1.4rem] lg:text-[1.5rem]"
          onClick={() => setShowReferral(true)}
        >
          <span>Refer and Earn</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3"
            />
          </svg>
        </button>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      <form
        className="mt-8 flex w-[30rem] flex-col gap-6 text-[1.4rem] text-white sm:w-[35rem] md:w-[40rem] lg:gap-8"
        ref={formRef}
        onSubmit={handleSubmit}
      >
        <input
          type="hidden"
          name="access_key"
          value="f025bc40-8155-4c7c-83ec-9e4f89abd397"
        />
        <CustomInput
          label="Your name"
          placeholder="Your name"
          name="your_name"
        />
        <CustomInput
          label="Your friend name"
          placeholder="Your friend name"
          name="friend_name"
        />
        <CustomInput
          label="Contact number or Email"
          placeholder="Contact number or Email"
          name="contact_info"
        />
        <button className="mt-3 flex w-min cursor-pointer items-center gap-2 rounded-lg bg-white px-5 py-2 text-[1.5rem] font-medium text-black md:px-6 md:py-3 lg:text-[1.7rem]">
          <span>Submit</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
            />
          </svg>
        </button>
      </form>

      {showReferral && <ReferralContainer setShowReferral={setShowReferral} />}
    </div>
  );
}

export default ReferralProgram;
