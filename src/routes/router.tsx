import { LandingPage } from "@/components/pages/landing";
import { Navigate, createBrowserRouter } from "react-router-dom";
import { routerPaths } from "./routerPaths";
import { LoginPage } from "@/components/pages/login";
import { SignUpPage } from "@/components/pages/signup";
import { OverviewPage } from "@/components/pages/overview";
import { TransactionsPage } from "@/components/pages/transactions";
import { NotFoundPage } from "@/components/pages/NotFound";
import { BillsPage } from "@/components/pages/bills";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
    errorElement: <Navigate to={routerPaths.not_found} replace={true} />,
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
  {
    path: routerPaths.bills,
    element: <BillsPage />,
  },
  {
    path: routerPaths.not_found,
    element: <NotFoundPage />,
  },
]);
