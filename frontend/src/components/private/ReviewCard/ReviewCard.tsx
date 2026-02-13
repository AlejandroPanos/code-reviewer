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

interface ReviewCardProps {
  title: string;
  date: string;
  code: string;
}

const ReviewCard = ({ title, date, code }: ReviewCardProps) => {
  return (
    <>
      <Card className="mx-auto w-full">
        <CardHeader>
          <CardTitle>{title}</CardTitle>
          <CardDescription>{format(new Date(date), "dd/MM/yyyy")}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-neutral-400 text-xs">{code}</p>
        </CardContent>
        <CardFooter>
          <Button variant="outline" size="sm" className="w-full hover:cursor-pointer">
            View Review
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

export default ReviewCard;
