import { LandingPage } from "@/components/pages/landing";
import { createBrowserRouter } from "react-router-dom";
import { routerPaths } from "./routerPaths";
import { LoginPage } from "@/components/pages/login";
import { SignUpPage } from "@/components/pages/signup";
import { OverviewPage } from "@/components/pages/overview";
import { TransactionsPage } from "@/components/pages/transactions";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: routerPaths.login,
    element: <LoginPage />,
  },
  {
    path: routerPaths.signup,
    element: <SignUpPage />,
  },
  {
    path: routerPaths.home,
    element: <OverviewPage />,
  },
  {
    path: routerPaths.transactions,
    element: <TransactionsPage />,
  },
]);
