import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { format } from "date-fns";
import { useNavigate } from "react-router";
import { useQueryClient, useMutation } from "@tanstack/react-query";
import { useAuth } from "@/hooks/useAuth";
import { deleteReview } from "@/helpers/helpers";
import { toast } from "sonner";

interface ReviewCardProps {
  id: string;
  title: string;
  date: string;
  code: string;
}

const ReviewCard = ({ id, title, date, code }: ReviewCardProps) => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  const { user } = useAuth();

  const deleteMutation = useMutation({
    mutationFn: deleteReview,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [user?._id, "reviews"] });
      toast.success("Review deleted successfully");
    },
    onError: () => {
      toast.error("Could not delete your review");
    },
  });

  const handleViewDetails = () => {
    navigate(`/reviews/${id}`);
  };

  const handleDelete = (id: string) => {
    if (window.confirm("You definitely want to delete this review?")) {
      deleteMutation.mutate(id);
    }
  };

  return (
    <>
      <Card className="mx-auto w-full">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription className="text-xs">
            {format(new Date(date), "dd/MM/yyyy")}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-neutral-400 text-xs">{code.slice(0, 60)}...</p>
        </CardContent>
        <CardFooter>
          <div className="w-full flex flex-col items-start gap-1">
            <Button
              onClick={handleViewDetails}
              variant="outline"
              size="sm"
              className="w-full hover:cursor-pointer"
            >
              View Review
            </Button>
            <Button
              onClick={() => handleDelete(id)}
              variant="ghost"
              size="sm"
              className="w-full hover:cursor-pointer"
            >
              Delete Review
            </Button>
          </div>
        </CardFooter>
      </Card>
    </>
  );
};

export default ReviewCard;
