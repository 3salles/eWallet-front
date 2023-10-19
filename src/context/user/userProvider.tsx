import { ReactNode, useEffect, useMemo, useState } from "react";
import UserContext from "./userContext";
import { cookiesUtils } from "@/utils/cookies.utils";

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState(
    JSON.parse(cookiesUtils.getCookies("user") ?? "{}")
  );

  useEffect(() => {
    setUser(JSON.parse(cookiesUtils.getCookies("user") ?? "{}"));
  }, []);

  const contextValue = useMemo(() => ({ user }), [user]);

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
