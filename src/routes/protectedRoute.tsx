import { cookiesUtils } from "@/utils/cookies.utils";
import { ReactNode, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { routerPaths } from "./routerPaths";

export const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const navigate = useNavigate();

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const checkUserToken = () => {
    const userToken = cookiesUtils.getCookies("token");
    console.log(">>>> token protecd: ", userToken);

    if (!userToken || userToken === undefined) {
      setIsAuthenticated(false);
      navigate(routerPaths.login);
      return;
    }

    setIsAuthenticated(true);
  };

  useEffect(() => {
    checkUserToken();
  }, [isAuthenticated]);

  return <>{isAuthenticated && children}</>;
};
