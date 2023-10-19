import { IError, INewUser} from ".";

export interface IAuth {
  username: string;
  password: string;
}
export interface IAuthContext {
  authError: IError;
  login: (auth: IAuth) => any;
  register: (newUser: INewUser) => any;
  clearErrorMessage: () => void
  logout: () => any;
}