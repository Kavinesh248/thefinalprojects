const TabbedCotent = function ({ description }) {
  return (
    <>
      <h1 className="mb-15 text-[1.4rem] text-white sm:text-[1.5rem] md:text-[1.6rem] lg:text-[1.7rem] lg:leading-[1.6]">
        Hey Explorer! 🚀 Just one step away to get your dream internal points.
        Take the next step fast! <br /> Get Connect with us and get your dream
        project.
      </h1>
      <p className="mb-15 text-[1.6rem] md:text-[1.8rem]">
        <span className="text-[var(--bg--primary-orange)]">
          Project Description:
        </span>{" "}
        {description}
      </p>
      <ul className="mb-15 flex flex-col gap-1 text-[1.4rem] sm:gap-2 sm:text-[1.5rem] lg:gap-3 lg:text-[1.6rem]">
        <li>📧 Email: thefinalprojects18@gmail.com</li>
        <li>📞 Phone: 6369934324, 9895682065</li>
        <li>💬 WhatsApp Group: Join Here</li>
        <li>🌐 Website: www.thefinalprojects.com</li>
      </ul>

      <p className="w-min bg-[var(--bg--primary-orange)] p-1 text-[1.4rem] text-nowrap">
        built by: Team thefinalprojects
      </p>
    </>
  );
};

export default TabbedCotent;
