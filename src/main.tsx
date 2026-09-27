import "./index.css";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { Analytics } from "@vercel/analytics/react";
import Homepage from "./pages/homepage/Homepage.tsx";
import { StrictMode } from "react";
import { ThemeProvider } from "./theme/ThemeProvider.tsx";
import { ThemeToggle } from "./theme/ThemeToggle.tsx";
import { createRoot } from "react-dom/client";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider>
      <QueryClientProvider client={queryClient}>
        <ThemeToggle />
        <Homepage />
      </QueryClientProvider>
      <Analytics />
    </ThemeProvider>
  </StrictMode>,
);
