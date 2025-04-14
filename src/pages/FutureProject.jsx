import { useRef } from "react";
import { assets } from "../assets/assets";
import { ToastContainer, toast } from "react-toastify";
import CategoryCard from "../components/CategoryCard/CategoryCard";

const FutureProject = function () {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    // Use the fetch API to send the form data to Web3Forms
    const formData = new FormData(form.current);
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const result = await response.json();

    if (result.success) {
      toast.success("Your email was submitted successfully!", {
        style: {
          fontSize: "1.4rem", // or "20px"
          padding: "16px",
        },
      });
      e.target.reset();
    } else {
      alert("There was an error sending your message. Please try again.");
    }
  };

  return (
    <div>
      <div className="mb-14 flex items-center justify-center p-8">
        <div className="text-center">
          <h1 className="mb-4 text-[3.2rem] font-semibold text-[#E47112] md:text-[4.4rem] lg:text-[5.2rem]">
            🚧 Coming Soon
          </h1>
          <p className="mb-6 text-[1.4rem] text-white md:text-[1.8rem] lg:text-[2rem]">
            We're crafting something amazing. Sign up to get notified when we
            launch!
          </p>
          <form
            className="mt-12 flex text-white"
            ref={form}
            onSubmit={sendEmail}
          >
            <input
              type="hidden"
              name="access_key"
              value="f025bc40-8155-4c7c-83ec-9e4f89abd397"
            ></input>
            <input
              type="email"
              name="email"
              placeholder="Enter your email..."
              className="flex-grow rounded-l-md border-1 border-[#cccccc] px-4 py-2 text-[1.3rem] placeholder:text-[1.3rem] focus:outline-none md:px-5 md:py-4 md:text-[1.5rem] md:placeholder:text-[1.4rem] lg:px-6 lg:py-4 lg:text-[1.6rem] lg:placeholder:text-[1.6rem]"
            />
            <button className="cursor-pointer bg-[#E47112] px-4 py-2 text-[1.3rem] text-white transition hover:bg-[#CC5F0E] md:px-4 md:py-4 md:text-[1.4rem] lg:px-6 lg:py-5">
              Notify Me
            </button>
          </form>
        </div>
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
      <div className="grid gap-8 blur-xs md:grid-cols-2 xl:grid-cols-4">
        <CategoryCard
          defaultCategory="Cyber Security"
          defaultName="🔐"
          defaultImg={assets.security}
        />
        <CategoryCard
          defaultCategory="Digital Marketing"
          defaultImg={assets.marketing}
          defaultName="🔐"
        />
      </div>
    </div>
  );
};

export default FutureProject;
