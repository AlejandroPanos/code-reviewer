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

const Reviews = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card className="mx-auto w-full">
          <CardHeader>
            <CardTitle>Review Title</CardTitle>
            <CardDescription>{format(new Date(), "dd/MM/yyyy")}</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-neutral-400 text-xs">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ea aliquam qui autem id
              necessitatibus, porro nisi iste perferendis harum animi quisquam obcaecati excepturi
              iure cumque quasi et dolorem dolorum provident.
            </p>
          </CardContent>
          <CardFooter>
            <Button variant="outline" size="sm" className="w-full hover:cursor-pointer">
              View Review
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default Reviews;
