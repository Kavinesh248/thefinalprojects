import { memo } from "react";

const HeaderContent = memo(function HeaderContent({ category }) {
  return (
    <div className="mb-8 flex text-white">
      <h1 className="text-[1.6rem] font-semibold sm:text-[1.8rem] md:text-[2rem] xl:text-[2.4rem]">
        {category}
      </h1>
    </div>
  );
});

export default HeaderContent;
