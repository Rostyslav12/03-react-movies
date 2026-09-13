import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "modern-normalize";
import { Toaster } from "react-hot-toast";

import App from "./components/App/App";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
    <Toaster position="top-right" />
  </StrictMode>,
);
