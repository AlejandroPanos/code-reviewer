import ReviewCard from "../ReviewCard/ReviewCard";
import { getReviews } from "@/helpers/helpers";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/hooks/useAuth";

interface UserReview {
  _id: string;
  userId: string;
  title: string;
  code: string;
  summary: {
    totalScore: number;
    text: string;
  };
  structure: {
    score: number;
    feedback: string;
  };
  security: {
    score: number;
    feedback: string;
  };
  accessibility: {
    score: number;
    feedback: string;
  };
  scalability: {
    score: number;
    feedback: string;
  };
  createdAt: string;
  updatedAt: string;
}

const ReviewGrid = () => {
  const { user } = useAuth();

  const reviewsQuery = useQuery({
    queryKey: [user?._id, "reviews"],
    queryFn: getReviews,
  });

  if (reviewsQuery.isPending) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  if (reviewsQuery.isError) {
    return (
      <div
        className="flex items-start sm:items-center p-4 mb-4 text-sm text-red-400 rounded-lg bg-red-950 border border-red-400"
        role="alert"
      >
        <svg
          className="w-4 h-4 me-2 shrink-0 mt-0.5 sm:mt-0"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M10 11h2v5m-2 0h4m-2.592-8.5h.01M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
          />
        </svg>
        <p>
          <span className="font-medium me-1">Warning!</span> Error. Try again later.
        </p>
      </div>
    );
  }
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {!reviewsQuery.data || reviewsQuery.data.length === 0 ? (
          <p className="text-neutral-400 text-sm font-light py-8">
            No reviews found. Generate your first review!
          </p>
        ) : (
          reviewsQuery.data?.map((r: UserReview) => {
            return (
              <ReviewCard key={r._id} id={r._id} title={r.title} date={r.createdAt} code={r.code} />
            );
          })
        )}
      </div>
    </>
  );
};

export default ReviewGrid;
