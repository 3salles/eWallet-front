/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */

import { ReactNode, useCallback, useMemo, useState } from "react";
import AuthContext from "./authContext";
import api from "@/services/api";
import { IAuth, IError, INewUser } from "@/types";
import { ErrorAdapter } from "@/adapters/ErrorAdapter";
import Cookies from "js-cookie";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const [authError, setAuthError] = useState<IError>({} as IError);

  const login = useCallback(async (auth: IAuth) => {
    return await api
      .post("/login", { ...auth })
      .then((response) => response.data.access_token)
      .catch((error) => {
        console.error(">>>> error: ", error);
        setAuthError(ErrorAdapter(error));
        throw new Error(error);
      });
  }, []);

  const register = useCallback(async (newUser: INewUser) => {
    return await api
      .post("/register", { ...newUser })
      .then((response) => response.data.access_token)
      .catch((error) => {
        console.error(">>>> error: ", error);
        setAuthError(ErrorAdapter(error));
        throw new Error(error);
      });
  }, []);

  const addToken = useCallback(
    (token: string) => Cookies.set("token", token, { expires: 1 }),
    []
  );

  const clearErrorMessage = useCallback(() => setAuthError({} as IError), []);

  const contextValue = useMemo(
    () => ({ login, addToken, authError, clearErrorMessage, register }),
    [login, addToken, authError, clearErrorMessage, register]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
