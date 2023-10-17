/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */

import { ReactNode, useCallback, useMemo, useState } from "react";
import AuthContext from "./authContext";
import api from "@/services/api";
import { IAuth, IError } from "@/types";
import { ErrorAdapter } from "@/adapters/ErrorAdapter";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const [authError, setAuthError] = useState<IError>({} as IError);

  const login = useCallback(async (auth: IAuth) => {
    return await api
      .post("/login", { ...auth })
      .then((response) => response.data.access_token)
      .catch((error) => {
        console.log(">>>> error: ", error);
        setAuthError(ErrorAdapter(error));
        throw new Error(error);
      });
  }, []);

  const addToken = useCallback((token: string) => setToken(token), []);

  const clearErrorMessage = useCallback(() => setAuthError({} as IError), []);

  const contextValue = useMemo(
    () => ({ token, login, addToken, authError, clearErrorMessage }),
    [token, login, addToken, authError, clearErrorMessage]
  );

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
