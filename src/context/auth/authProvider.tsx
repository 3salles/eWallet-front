/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */

import { ReactNode, useCallback, useMemo, useState } from "react";
import AuthContext from "./authContext";
import api from "@/services/api";
import { IAuth, IError, INewUser } from "@/types";
import { ErrorAdapter } from "@/adapters/ErrorAdapter";
import Cookies from "js-cookie";
import { cookiesUtils } from "@/utils/cookies.utils";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [authError, setAuthError] = useState<IError>({} as IError);

  const login = useCallback(async (auth: IAuth) => {
    return await api
      .post("/login", { ...auth })
      .then((response) => {
        Cookies.set("token", response.data.access_token, { expires: 1 });
        Cookies.set("user", JSON.stringify(response.data.user), { expires: 1 });
      })
      .catch((error) => {
        console.error(">>>> error: ", error);
        setAuthError(ErrorAdapter(error));
        throw new Error(error);
      });
  }, []);

  const register = useCallback(async (newUser: INewUser) => {
    return await api
      .post("/register", { ...newUser })
      .then((response) => {
        Cookies.set("token", response.data.access_token, { expires: 1 });
        Cookies.set("user", JSON.stringify(response.data.user), { expires: 1 });
      })
      .catch((error) => {
        console.error(">>>> error: ", error);
        setAuthError(ErrorAdapter(error));
        throw new Error(error);
      });
  }, []);

  const clearErrorMessage = useCallback(() => setAuthError({} as IError), []);

  const logout = useCallback(async () => {
    const token = cookiesUtils.getCookies("token");
    const config = {
      headers: {
        Authorization: `Bearer ${token ?? ""}`,
      },
    };

    return api
      .post("/logout", config)
      .then((response) => {
        cookiesUtils.removeCookies("token");
        return response.data.message;
      })
      .catch((error) => {
        console.error(">>>> error: ", error);
        setAuthError(ErrorAdapter(error));
        throw new Error(error);
      });
  }, []);

  const contextValue = useMemo(
    () => ({ login, authError, clearErrorMessage, register, logout }),
    [login, authError, clearErrorMessage, register]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
