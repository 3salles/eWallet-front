import { ITransactionContext } from "@/types";
import { createContext } from "react";

const TransactionContext = createContext({} as ITransactionContext);

export default TransactionContext;
