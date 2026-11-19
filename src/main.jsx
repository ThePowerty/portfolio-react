import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "./pages/Home/Home.css";
import { Home, Resume } from "./pages";

const isResumeRoute = window.location.hash === "#/resume";

createRoot(document.getElementById("root")).render(
  <StrictMode>{isResumeRoute ? <Resume /> : <Home />}</StrictMode>
);
