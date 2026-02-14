import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthContextProvider from "./context/AuthContext";
import { Toaster } from "@/components/ui/sonner";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

const root = createRoot(document.querySelector("#root")!);
root.render(
  <AuthContextProvider>
    <QueryClientProvider client={queryClient}>
      <StrictMode>
        <App />
        <Toaster />
      </StrictMode>
    </QueryClientProvider>
  </AuthContextProvider>,
);
