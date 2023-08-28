import { createBrowserRouter } from "react-router-dom";
import { LandingPage } from "../ui/pages/landing";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
]);
