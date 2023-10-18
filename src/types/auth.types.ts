import { IError, INewUser, IUser } from ".";

export interface IAuth {
  username: string;
  password: string;
}
export interface IAuthContext {
  authError: IError;
  user: IUser;
  login: (auth: IAuth) => any;
  register: (newUser: INewUser) => any;
  clearErrorMessage: () => void
  logout: () => any;
}