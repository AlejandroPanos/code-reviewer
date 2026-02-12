import { format } from "date-fns";
import CircularProgress from "@/components/customized/progress/progress-07";
import { Field, FieldLabel } from "@/components/ui/field";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Avatar } from "@/components/ui/avatar";
import { Layers, FingerprintPattern, Accessibility, Scaling } from "lucide-react";

const Review = () => {
  return (
    <div className="flex-1 min-w-0 h-full flex flex-col gap-8 overflow-y-auto">
      <div className="flex items-center justify-between sticky top-0 bg-background/10 backdrop-blur-md z-10 p-4 border border-neutral-800 rounded-lg">
        <h2 className="font-semibold">Results</h2>
        <p className="text-xs font-light text-neutral-400">{format(new Date(), "dd/MM/yyyy")}</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
        <div className="col-span-1 mx-auto flex w-full max-w-xs flex-col items-center">
          <CircularProgress
            labelClassName="text-lg font-bold"
            showLabel
            size={parseInt(`${100} lg:${80}`)}
            strokeWidth={8}
            value={25}
          />
        </div>
        <div className="col-span-1 md:col-span-3 flex flex-col items-start gap-4">
          <h2 className="font-semibold">Overall Score</h2>
          <p className="text-neutral-400 text-xs">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate in autem esse id
            aperiam ipsum. Laboriosam, nisi, voluptatum modi eligendi numquam iure excepturi beatae
            quas, facilis quis corrupti ut. Sint!
          </p>
          <div className="w-full flex flex-col items-start gap-2">
            <Field className="w-full">
              <FieldLabel htmlFor="progress-upload" className="-mb-2 text-xs text-neutral-400">
                <span>Code Structure</span>
                <span className="ml-auto">86</span>
              </FieldLabel>
              <Progress value={86} id="progress-upload" className="h-1 [&>div]:bg-emerald-500" />
            </Field>
            <Field className="w-full">
              <FieldLabel htmlFor="progress-upload" className="-mb-2 text-xs text-neutral-400">
                <span>Security</span>
                <span className="ml-auto">34</span>
              </FieldLabel>
              <Progress value={34} id="progress-upload" className="h-1 [&>div]:bg-red-500" />
            </Field>
            <Field className="w-full">
              <FieldLabel htmlFor="progress-upload" className="-mb-2 text-xs text-neutral-400">
                <span>Accessibility</span>
                <span className="ml-auto">66</span>
              </FieldLabel>
              <Progress value={66} id="progress-upload" className="h-1 [&>div]:bg-amber-500" />
            </Field>
            <Field className="w-full">
              <FieldLabel htmlFor="progress-upload" className="-mb-2 text-xs text-neutral-400">
                <span>Scalability</span>
                <span className="ml-auto">81</span>
              </FieldLabel>
              <Progress value={81} id="progress-upload" className="h-1 [&>div]:bg-emerald-500" />
            </Field>
          </div>
        </div>
      </div>

      <div className="w-full mt-8 p-1">
        <Select>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select a filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Filters</SelectLabel>
              <SelectItem value="structure">Structure</SelectItem>
              <SelectItem value="security">Security</SelectItem>
              <SelectItem value="accessibility">Accessibility</SelectItem>
              <SelectItem value="scalability">Scalability</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      <div className="w-full flex flex-col gap-8">
        <div className="w-full flex items-center gap-2">
          <Avatar className="h-10 w-10 rounded-lg flex items-center justify-center bg-blue-800/30 border border-blue-400/30">
            <Layers className="w-5 h-5 text-blue-400" />
          </Avatar>
          <div className="grid flex-1 text-left text-sm leading-tight">
            <span className="truncate font-semibold text-base">Code Structure</span>
            <span className="truncate text-xs text-neutral-400">
              Organization, modularity, and code readability
            </span>
          </div>
        </div>

        <div className="w-full flex flex-col items-start gap-4">
          <div className="flex flex-col items-start gap-2 p-4 border border-emerald-800 bg-emerald-700/30 rounded-lg">
            <h3 className="font-semibold text-sm text-neutral-300">Feedback 1</h3>
            <p className="text-neutral-400 text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A obcaecati at soluta odio
              quod dicta eligendi incidunt rerum.
            </p>
          </div>
          <div className="flex flex-col items-start gap-2 p-4 border border-red-800 bg-red-600/30 rounded-lg">
            <h3 className="font-semibold text-sm text-neutral-300">Feedback 1</h3>
            <p className="text-neutral-400 text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A obcaecati at soluta odio
              quod dicta eligendi incidunt rerum.
            </p>
          </div>
          <div className="flex flex-col items-start gap-2 p-4 border border-amber-800 bg-amber-600/30 rounded-lg">
            <h3 className="font-semibold text-sm text-neutral-300">Feedback 1</h3>
            <p className="text-neutral-400 text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. A obcaecati at soluta odio
              quod dicta eligendi incidunt rerum.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
