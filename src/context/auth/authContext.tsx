import { IAuthContext } from "@/types";
import { createContext } from "react";

const AuthContext = createContext({} as IAuthContext);

export default AuthContext;
