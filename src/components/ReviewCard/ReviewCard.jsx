import { assets } from "../../assets/assets";

const ReviewCard = function ({ review }) {
  return (
    <div className="relative flex w-full flex-col gap-4 rounded-2xl border-t-4 border-orange-500 bg-white p-6 text-center text-[1.7rem] text-black shadow-[0_4px_12px_rgba(0,0,0,0.1)] transition-shadow duration-200 hover:shadow-[0_6px_18px_rgba(0,0,0,0.2)]">
      <div className="absolute -top-6 left-1/2 flex h-12 w-12 -translate-x-1/2 transform items-center justify-center rounded-full bg-orange-500 text-[2.5rem] text-white shadow-lg">
        “
      </div>
      <div className="mb-4 flex gap-4 rounded-lg p-2">
        <div className="h-[4rem] w-[4rem] overflow-hidden rounded-full border-2 border-black bg-gray-100 p-1">
          <img
            src={review.avatar || assets.demoAvatar}
            alt={`${review.name}'s avatar`}
            className="h-full w-full rounded-full object-cover"
          />
        </div>
        <div className="flex flex-grow flex-col items-start text-[1.4rem] font-medium text-gray-800">
          <p>{review.name}</p>
          <p className="text-gray-600">{review.role}</p>
        </div>
      </div>

      {/* Review Summary */}
      <p className="text-start text-[1.5rem] break-words whitespace-pre-line text-gray-900 md:text-[1.7rem]">
        "{review.summary}"
      </p>
    </div>
  );
};

export default ReviewCard;
