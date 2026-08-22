import "./index.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Analytics } from "@vercel/analytics/react";
import App from "./pages/homepage/Homepage.tsx";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
    <Analytics />
  </StrictMode>,
);
