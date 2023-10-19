import { IUserContext } from "@/types";
import { createContext } from "react";

const UserContext = createContext({} as IUserContext);

export default UserContext;
