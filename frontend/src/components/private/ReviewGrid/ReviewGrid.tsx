import ReviewCard from "../ReviewCard/ReviewCard";
import { getReviews } from "@/helpers/helpers";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/hooks/useAuth";
import Loading from "@/components/state/Loading/Loading";
import ErrorComp from "@/components/state/ErrorComp/ErrorComp";

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
    return <Loading message="Fetching your reviews..." />;
  }

  if (reviewsQuery.isError) {
    return <ErrorComp error="Could not fetch your reviews." />;
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
