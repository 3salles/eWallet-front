import { LandingPage } from "@/components/pages/landing";
import { createBrowserRouter } from "react-router-dom";
import { routerPaths } from "./routerPaths";
import { LoginPage } from "@/components/pages/login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: routerPaths.login,
    element: <LoginPage />,
  },
]);
