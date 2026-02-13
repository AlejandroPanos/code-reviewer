import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import AuthContextProvider from "./context/AuthContext";

const queryClient = new QueryClient();

const root = createRoot(document.querySelector("#root")!);
root.render(
  <AuthContextProvider>
    <QueryClientProvider client={queryClient}>
      <StrictMode>
        <App />
      </StrictMode>
    </QueryClientProvider>
  </AuthContextProvider>,
);
