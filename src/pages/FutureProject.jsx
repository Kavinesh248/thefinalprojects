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
          <h1 className="mb-4 text-[5rem] font-semibold text-[#E47112]">
            🚧 Coming Soon
          </h1>
          <p className="mb-6 text-[1.8rem] text-white">
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
              className="flex-grow rounded-l-md border-1 border-[#cccccc] px-4 py-4 text-[1.6rem] placeholder:text-[1.6rem] focus:outline-none"
            />
            <button className="cursor-pointer bg-[#E47112] px-5 py-4 text-[1.6rem] text-white transition hover:bg-[#CC5F0E]">
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
      <div className="grid grid-cols-4 gap-8 blur-xs">
        <CategoryCard category="Cyber Security" img={assets.security} />
        <CategoryCard category="Digital Marketing" img={assets.marketing} />
      </div>
    </div>
  );
};

export default FutureProject;
