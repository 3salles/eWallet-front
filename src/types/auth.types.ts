import { IError } from ".";

export interface IAuth {
  username: string;
  password: string;
}

export interface IAuthContext {
  token: string | null;
  authError: IError;
  login: (auth: IAuth) => any;
  addToken: (token: string) => void;
  clearErrorMessage: () => void
}