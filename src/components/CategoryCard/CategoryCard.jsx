const CategoryCard = function ({ category, img }) {
  return (
    <div className="w-full overflow-hidden rounded-lg bg-[var(--bg-secondary)] px-6 py-5 text-white lg:p-6">
      <div className="relative h-64 w-full overflow-hidden rounded-lg bg-gray-200 object-cover">
        <img src={img} alt="content" className="w-full" />
      </div>

      <div className="pt-6 text-[1.5rem] md:text-[1.6rem]">
        <p className="mb-[1.2rem] text-[1.2rem] text-[#74c0fc]">Bundle pack</p>

        <h1 className="mb-[1.8rem]">{category}</h1>

        <button className="btn w-full">
          <ion-icon name="play-circle"></ion-icon> <span>View All</span>
        </button>
      </div>
    </div>
  );
};

export default CategoryCard;
