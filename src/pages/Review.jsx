import { useEffect, useState } from "react";
import CustomInput from "../components/CustomInput/CustomInput";
import ReviewCard from "../components/ReviewCard/ReviewCard";
import { capitalize } from "../utils/capitalize";
import { supabase } from "../utils/supabase-client";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const getAvatarUrl = (name) =>
  `https://api.dicebear.com/9.x/pixel-art/svg?seed=${encodeURIComponent(name)}`;

const Review = function () {
  const [formData, setFormData] = useState({
    name: "",
    role: "",
    summary: "",
  });
  const [formVisible, setFormVisible] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Initialize query client
  const queryClient = useQueryClient();

  // Fetch reviews from Supabase
  const fetchReviews = async () => {
    const { data, error } = await supabase.from("reviews").select("*");
    if (error) throw new Error(error.message);
    return data;
  };

  // useQuery to fetch reviews
  const {
    data: reviews = [],
    isFetched,
    isError,
    error,
  } = useQuery({
    queryKey: ["reviews"],
    queryFn: fetchReviews,
  });

  // useEffect to show the form if there are no reviews
  useEffect(() => {
    if (isFetched && reviews.length === 0) {
      setFormVisible(true);
    }
  }, [isFetched, reviews]);

  // useMutation to add a new review
  const { mutate: addReview } = useMutation({
    mutationFn: async (review) => {
      const { data, error } = await supabase
        .from("reviews")
        .insert([review])
        .select();
      if (error) throw new Error(error.message);
      return data[0];
    },

    onSuccess: (newReview) => {
      queryClient.setQueryData(["reviews"], (old) => [...old, newReview]);
      setFormData({ name: "", role: "", summary: "" });
      setFormVisible(false);
    },
  });

  // handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const newReview = {
      ...formData,
      name: capitalize(formData.name),
      role: capitalize(formData.role),
      summary: capitalize(formData.summary),
      avatar: getAvatarUrl(formData.name),
    };

    addReview(newReview);
  };

  if (isError) {
    return (
      <p className="text-[1.4rem] text-red-500 md:text-[2rem]">
        Failed to load reviews: {error.message}
      </p>
    );
  }

  if (!isFetched) {
    return (
      <div className="text-[1.4rem] text-[var(--bg--primary-orange)] md:text-[2rem]">
        Loading reviews...
      </div>
    );
  }

  const isFormValid =
    formData.name.trim() && formData.role.trim() && formData.summary.trim();

  return (
    <div className="text-white">
      <div className="mb-12 flex w-full items-center justify-between">
        <h1 className="text-[1.9rem] sm:text-[2rem] lg:text-[2.2rem]">
          Client Reviews
        </h1>
        <button
          className="flex cursor-pointer items-center gap-2 rounded-md border-none bg-[var(--bg--primary-orange)] px-4 py-2 text-[1.4rem] font-medium text-white transition-all duration-200 hover:bg-[#e98d41] md:text-[1.5rem] lg:text-[1.7rem]"
          onClick={() => setFormVisible((prev) => !prev)}
        >
          <span>{formVisible ? "Cancel" : "Add Review"}</span>
          <ion-icon
            name="add-circle-outline"
            className="text-[1.6rem]"
          ></ion-icon>
        </button>
      </div>

      {formVisible ? (
        <form
          onSubmit={handleSubmit}
          className="mt-8 flex w-[30rem] flex-col gap-6 text-[1.4rem] sm:w-[35rem] md:w-[40rem] lg:w-[45rem] lg:gap-8"
        >
          <CustomInput
            label="Your name"
            placeholder="Your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <CustomInput
            label="Your role"
            placeholder="ex: Student"
            name="role"
            value={formData.role}
            onChange={handleChange}
          />
          <div>
            <label htmlFor="summary" className="mb-4 block tracking-wide">
              Give a detailed review*
            </label>
            <textarea
              id="summary"
              name="summary"
              placeholder="Write your review here..."
              required
              value={formData.summary}
              onChange={handleChange}
              rows={5}
              className="w-full resize-none rounded-md border border-white/20 px-6 py-4 text-white placeholder-gray-400 transition-all duration-200 outline-none hover:border-orange-400 focus:border-orange-500 focus:ring-2 focus:ring-orange-500/50"
            ></textarea>
          </div>
          <button
            type="submit"
            disabled={!isFormValid}
            className="mt-3 flex w-min cursor-pointer items-center gap-2 rounded-lg bg-white px-5 py-2 text-[1.5rem] font-medium text-black md:px-6 md:py-3 lg:text-[1.7rem]"
          >
            <span>Submit</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9"
              />
            </svg>
          </button>
        </form>
      ) : (
        <div className="mt-10 grid gap-6 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {reviews.map((review) => (
            <ReviewCard key={review.id} review={review} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Review;
