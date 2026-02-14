type Severity = "passed" | "info" | "warning" | "critical";

interface Feedback {
  title: string;
  description: string;
  severity: Severity;
}

interface CategoryScore {
  score: number;
  feedback: Feedback[];
}

export interface ReviewType {
  summary: {
    totalScore: number;
    text: string;
  };
  structure: CategoryScore;
  security: CategoryScore;
  accessibility: CategoryScore;
  scalability: CategoryScore;
}

export interface SaveReview {
  title: string;
  code: string;
  summary: {
    totalScore: number;
    text: string;
  };
  structure: CategoryScore;
  security: CategoryScore;
  accessibility: CategoryScore;
  scalability: CategoryScore;
}
