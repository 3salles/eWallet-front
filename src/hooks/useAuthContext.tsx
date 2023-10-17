import AuthContext from "@/context/auth/authContext";
import { useContext } from "react";

const useAuthContext = () => useContext(AuthContext);

export default useAuthContext;
