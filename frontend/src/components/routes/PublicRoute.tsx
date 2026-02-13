import { useAuth } from "@/hooks/useAuth";
import { Navigate } from "react-router";
import { type ReactNode } from "react";

interface PublicRouteProps {
  children: ReactNode;
}

const PublicRoute = ({ children }: PublicRouteProps) => {
  const { user } = useAuth();

  if (user) {
    return <Navigate to="/dashboard" replace />;
  }
  return children;
};

export default PublicRoute;
