const Input = function () {
  return (
    <div className="hidden basis-[70%] rounded-xl bg-[var(--bg-secondary)] p-5 lg:flex lg:basis-[60%] lg:items-center lg:gap-4">
      <label htmlFor="inputLg">
        <ion-icon
          name="search-outline"
          className="ld:h-[2.4rem] mt-2 h-[2.1rem] w-[2.1rem] lg:w-[2.4rem]"
        ></ion-icon>
      </label>
      <input
        type="text"
        id="inputLg"
        className="w-full text-[1.6rem] placeholder:text-[1.5rem] focus:outline-0 lg:placeholder:text-[1.7rem]"
        placeholder="Search..."
      />
    </div>
  );
};

export default Input;
