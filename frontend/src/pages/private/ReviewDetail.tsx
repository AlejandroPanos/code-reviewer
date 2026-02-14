import { useState } from "react";
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
import { Layers, FingerprintPattern, Accessibility, Scaling, FileText } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router";
import { getReview } from "@/helpers/helpers";
import Loading from "@/components/state/Loading/Loading";
import ErrorComp from "@/components/state/ErrorComp/ErrorComp";

type FilterCategory = "structure" | "security" | "accessibility" | "scalability";

type Severity = "passed" | "info" | "warning" | "critical";

interface Feedback {
  title: string;
  description: string;
  severity: Severity;
}

const ReviewDetail = () => {
  const [selectedFilter, setSelectedFilter] = useState<FilterCategory>("structure");
  const { id } = useParams<{ id: string }>();

  const reviewQuery = useQuery({
    queryKey: [id, "review"],
    queryFn: () => getReview(id!),
    enabled: !!id,
  });

  if (reviewQuery.isPending) {
    return <Loading message="Loading review..." />;
  }

  if (reviewQuery.isError) {
    return <ErrorComp error="Could not fetch your review." />;
  }

  // Category configuration
  const categoryConfig = {
    structure: {
      icon: Layers,
      title: "Code Structure",
      description: "Organization, modularity, and code readability",
      bgClass: "bg-blue-800/30 border-blue-400/30",
      iconClass: "text-blue-400",
    },
    security: {
      icon: FingerprintPattern,
      title: "Security",
      description: "Vulnerability assessment and security best practices",
      bgClass: "bg-red-800/30 border-red-400/30",
      iconClass: "text-red-400",
    },
    accessibility: {
      icon: Accessibility,
      title: "Accessibility",
      description: "WCAG compliance and inclusive design patterns",
      bgClass: "bg-purple-800/30 border-purple-400/30",
      iconClass: "text-purple-400",
    },
    scalability: {
      icon: Scaling,
      title: "Scalability",
      description: "Performance optimization and architectural patterns",
      bgClass: "bg-emerald-800/30 border-emerald-400/30",
      iconClass: "text-emerald-400",
    },
  };

  // Severity configuration
  const severityConfig = {
    passed: {
      label: "Passed",
      bgClass: "bg-emerald-700/30 border-emerald-800",
      textClass: "text-emerald-400",
    },
    info: {
      label: "Info",
      bgClass: "bg-blue-700/30 border-blue-800",
      textClass: "text-blue-400",
    },
    warning: {
      label: "Warning",
      bgClass: "bg-amber-600/30 border-amber-800",
      textClass: "text-amber-400",
    },
    critical: {
      label: "Critical",
      bgClass: "bg-red-600/30 border-red-800",
      textClass: "text-red-400",
    },
  };

  // Get progress bar color based on score
  const getProgressColor = (score: number): string => {
    if (score >= 80) return "[&>div]:bg-emerald-500";
    if (score >= 60) return "[&>div]:bg-blue-500";
    if (score >= 40) return "[&>div]:bg-amber-500";
    return "[&>div]:bg-red-500";
  };

  // Get status for circular progress
  const getStatus = (score: number): "passed" | "info" | "warning" | "critical" => {
    if (score >= 80) return "passed";
    if (score >= 60) return "info";
    if (score >= 40) return "warning";
    return "critical";
  };

  const currentCategory = categoryConfig[selectedFilter];
  const CurrentIcon = currentCategory.icon;
  const currentFeedback: Feedback[] = reviewQuery.data[selectedFilter].feedback || [];

  return (
    <div className="flex-1 min-w-0 h-full flex flex-col gap-8 overflow-y-auto">
      {/* Summary Section */}
      <div className="grid grid-cols-1 md:grid-cols-4 items-center gap-4">
        <div className="col-span-1 mx-auto flex w-full max-w-xs flex-col items-center">
          <CircularProgress
            labelClassName="text-lg font-bold"
            showLabel
            size={100}
            strokeWidth={8}
            value={reviewQuery.data.summary.totalScore}
            status={getStatus(reviewQuery.data.summary.totalScore)}
          />
        </div>
        <div className="col-span-1 md:col-span-3 flex flex-col items-start gap-4">
          <h2 className="font-semibold">Overall Score</h2>
          <p className="text-neutral-400 text-xs">{reviewQuery.data.summary.text}</p>

          {/* Progress Bars */}
          <div className="w-full flex flex-col items-start gap-2">
            <Field className="w-full">
              <FieldLabel htmlFor="structure-progress" className="-mb-2 text-xs text-neutral-400">
                <span>Code Structure</span>
                <span className="ml-auto">{reviewQuery.data.structure.score}</span>
              </FieldLabel>
              <Progress
                value={reviewQuery.data.structure.score}
                id="structure-progress"
                className={`h-1 ${getProgressColor(reviewQuery.data.structure.score)}`}
              />
            </Field>
            <Field className="w-full">
              <FieldLabel htmlFor="security-progress" className="-mb-2 text-xs text-neutral-400">
                <span>Security</span>
                <span className="ml-auto">{reviewQuery.data.security.score}</span>
              </FieldLabel>
              <Progress
                value={reviewQuery.data.security.score}
                id="security-progress"
                className={`h-1 ${getProgressColor(reviewQuery.data.security.score)}`}
              />
            </Field>
            <Field className="w-full">
              <FieldLabel
                htmlFor="accessibility-progress"
                className="-mb-2 text-xs text-neutral-400"
              >
                <span>Accessibility</span>
                <span className="ml-auto">{reviewQuery.data.accessibility.score}</span>
              </FieldLabel>
              <Progress
                value={reviewQuery.data.accessibility.score}
                id="accessibility-progress"
                className={`h-1 ${getProgressColor(reviewQuery.data.accessibility.score)}`}
              />
            </Field>
            <Field className="w-full">
              <FieldLabel htmlFor="scalability-progress" className="-mb-2 text-xs text-neutral-400">
                <span>Scalability</span>
                <span className="ml-auto">{reviewQuery.data.scalability.score}</span>
              </FieldLabel>
              <Progress
                value={reviewQuery.data.scalability.score}
                id="scalability-progress"
                className={`h-1 ${getProgressColor(reviewQuery.data.scalability.score)}`}
              />
            </Field>
          </div>
        </div>
      </div>

      {/* Filter Select */}
      <div className="w-full mt-8 p-1">
        <Select
          value={selectedFilter}
          onValueChange={(value) => setSelectedFilter(value as FilterCategory)}
        >
          <SelectTrigger className="w-full">
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Filter by Category</SelectLabel>
              <SelectItem value="structure">Structure</SelectItem>
              <SelectItem value="security">Security</SelectItem>
              <SelectItem value="accessibility">Accessibility</SelectItem>
              <SelectItem value="scalability">Scalability</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>

      {/* Category Header */}
      <div className="w-full flex items-center gap-2">
        <Avatar
          className={`h-10 w-10 rounded-lg flex items-center justify-center ${currentCategory.bgClass}`}
        >
          <CurrentIcon className={`w-5 h-5 ${currentCategory.iconClass}`} />
        </Avatar>
        <div className="grid flex-1 text-left text-sm leading-tight">
          <span className="truncate font-semibold text-base">{currentCategory.title}</span>
          <span className="truncate text-xs text-neutral-400">{currentCategory.description}</span>
        </div>
      </div>

      {/* Feedback Items */}
      <div className="w-full flex flex-col items-start gap-4">
        {currentFeedback.length > 0 ? (
          currentFeedback.map((feedback, index) => (
            <div
              key={index}
              className={`w-full flex flex-col items-start gap-2 p-4 border rounded-lg ${severityConfig[feedback.severity].bgClass}`}
            >
              <div className="flex items-center gap-2 w-full">
                <h3 className="font-semibold text-sm text-neutral-300">{feedback.title}</h3>
                <span className={`ml-auto text-xs ${severityConfig[feedback.severity].textClass}`}>
                  {severityConfig[feedback.severity].label}
                </span>
              </div>
              <p className="text-neutral-400 text-xs">{feedback.description}</p>
            </div>
          ))
        ) : (
          <div className="w-full flex flex-col items-center justify-center gap-2 p-8 border border-dashed border-neutral-700 rounded-lg">
            <FileText className="w-8 h-8 text-muted-foreground" />
            <p className="text-sm text-muted-foreground">No feedback for this category</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ReviewDetail;
