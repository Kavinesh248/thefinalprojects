import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import SocialLogin from "../SocialLogin/SocialLogin";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError("");

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      navigate("/dashboard");
    } catch (err) {
      console.log(err);
      setError("Invalid email or password");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-white p-4">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <h1 className="text-[2.5rem] font-bold text-[#e47112]">
            Welcome Back
          </h1>
          <p className="text-[1.4rem] text-gray-600">
            Sign in to access your account
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-md">
          {error && (
            <div className="mb-4 rounded-md bg-red-100 p-3 text-sm text-red-700">
              {error}
            </div>
          )}

          <SocialLogin />

          <form onSubmit={handleSubmit}>
            <div className="mb-7">
              <label
                htmlFor="email"
                className="mb-1 block text-[1rem] font-medium text-gray-700 uppercase"
              >
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-md border border-gray-300 px-4 py-2 text-[1.2rem] focus:ring-2 focus:ring-[#e47112] focus:outline-none"
                required
              />
            </div>

            <div className="mb-6">
              <label
                htmlFor="password"
                className="mb-1 block text-[1rem] font-medium text-gray-700 uppercase"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-md border border-gray-300 px-3 py-2 text-[1.2rem] focus:ring-2 focus:ring-[#e47112] focus:outline-none"
                required
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full rounded-md px-4 py-2 text-[1.4rem] font-medium text-white ${isLoading ? "bg-[#e47112]/80" : "bg-[#e47112] hover:bg-[#e47112]/90"} transition-colors`}
            >
              {isLoading ? "Signing in..." : "Sign In"}
            </button>
          </form>

          <div className="mt-4 text-center text-[1.2rem] text-gray-600">
            Don't have an account?{" "}
            <NavLink
              to="/login/signup"
              className="text-[#e47112] hover:underline"
            >
              Register here
            </NavLink>
          </div>
        </div>

        <div className="mt-6 text-center text-lg text-gray-500">
          © {new Date().getFullYear()} thefinalprojects. All rights reserved.
        </div>
      </div>
    </div>
  );
};

export default SignIn;
