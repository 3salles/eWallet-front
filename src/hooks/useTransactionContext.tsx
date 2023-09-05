import TransactionContext from "@/context/transaction/transactionsContext";
import { useContext } from "react";

const useTransactionContext = () => useContext(TransactionContext);

export default useTransactionContext;
