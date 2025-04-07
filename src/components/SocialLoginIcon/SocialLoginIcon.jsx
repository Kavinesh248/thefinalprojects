const SocialLoginIcon = function ({ label, logo, color }) {
  return (
    <div className="flex items-center gap-2 border-1 border-black px-4 py-2 text-[1.4rem]">
      <ion-icon name={logo} style={{ fill: color }}></ion-icon>

      <span>{label}</span>
    </div>
  );
};

export default SocialLoginIcon;
