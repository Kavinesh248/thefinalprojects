const HeaderContent = function ({ category, pdf }) {
  return (
    <div className="mb-12 flex items-center justify-between text-white">
      <h1 className="text-[1.6rem] font-semibold sm:text-[1.8rem] md:text-[2rem] xl:text-[2.4rem]">
        {category}
      </h1>

      <a href={pdf} download="phpProjects.pdf">
        <button
          type="button"
          className="flex cursor-pointer items-center gap-2 rounded-lg bg-[var(--bg--primary-orange)] px-4 py-2 text-[1.2rem] font-medium transition-colors duration-300 hover:bg-[#f08529] sm:text-[1.5rem] xl:text-[1.6rem]"
        >
          <span>Get Titles</span>
          <ion-icon name="document-outline"></ion-icon>
        </button>
      </a>
    </div>
  );
};

export default HeaderContent;
