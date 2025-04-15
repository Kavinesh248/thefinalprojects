const CustomInput = function ({ label, placeholder, name }) {
  return (
    <div className="flex flex-col gap-3 text-[1.5rem] md:gap-4 lg:text-[1.6rem]">
      <label htmlFor={name} className="text- tracking-wide text-white">
        {label}*
      </label>
      <input
        type="text"
        id={name}
        name={name}
        placeholder={placeholder}
        required
        className="w-full rounded-md border border-white/20 px-6 py-4 text-white placeholder-gray-400 transition-all duration-200 outline-none hover:border-orange-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50 lg:px-6 lg:py-4"
      />
    </div>
  );
};

export default CustomInput;
