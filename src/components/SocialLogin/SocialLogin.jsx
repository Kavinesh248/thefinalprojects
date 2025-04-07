import SocialLoginIcon from "../SocialLoginIcon/SocialLoginIcon";

const SocialLogin = function () {
  return (
    <div className="mb-8 flex cursor-pointer items-center justify-around gap-2">
      <SocialLoginIcon label="Google" logo="logo-google" color="red" />
      <SocialLoginIcon label="Facebook" logo="logo-facebook" color="blue" />
    </div>
  );
};

export default SocialLogin;
