/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
//FIXME - Remove eslint-disable

import api from "@/services/api";
import { ITransaction } from "@/types";
import { ReactNode, useEffect, useMemo, useState } from "react";
import TransactionContext from "./transactionsContext";

export const TransactionProvider = ({ children }: { children: ReactNode }) => {
  const [transactions, setTransactions] = useState<ITransaction[]>(
    [] as ITransaction[]
  );
  const fetchTransactions = async () => {
    return await api
      .get("/transactions")
      .then((response) => setTransactions(response.data.transactions))
      .catch((error) => {
        console.error(error);
        throw new Error(error); //TODO - Add notifications
      });
  };

  useEffect(() => {
    void fetchTransactions();
  }, [transactions]);

  const contextValue = useMemo(
    () => ({
      transactions,
    }),
    [transactions]
  );

  return (
    <TransactionContext.Provider value={contextValue}>
      {children}
    </TransactionContext.Provider>
  );
};
