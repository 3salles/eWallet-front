/* eslint-disable @typescript-eslint/no-unsafe-argument */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
//FIXME - Remove eslint-disable

import api from "@/services/api";
import { ITransaction, ITransactionDrawer } from "@/types";
import { ReactNode, useCallback, useEffect, useMemo, useState } from "react";
import TransactionContext from "./transactionsContext";
import defaultTransaction from "./defaultTransaction";
import uuid from "@/utils/uuid";

export const TransactionProvider = ({ children }: { children: ReactNode }) => {
  const [transactions, setTransactions] = useState<ITransaction[]>(
    [] as ITransaction[]
  );
  const [selectedTransaction, setSelectedTransaction] =
    useState<ITransaction>(defaultTransaction);

  const [transactionDrawer, setTransactionDrawer] =
    useState<ITransactionDrawer>({
      visible: false,
      type: "create",
      transaction: null,
    });

  const fetchTransactions = async () => {
    return await api
      .get("/transactions")
      .then((response) => setTransactions(response.data.transactions))
      .catch((error) => {
        console.error(error);
        throw new Error(error); //TODO - Add notifications
      });
  };

  const updateSelectedTransaction = useCallback(async (uid: string | null) => {
    if (uid) {
      await api
        .get(`/transactions/${uid}`)
        .then((response) => setSelectedTransaction(response.data));
    }
  }, []);

  const createTransaction = useCallback(
    async (newTransaction: Omit<ITransaction, "uid">) => {
      const uid = uuid();

      const response = await api.post(`transactions/${uid}`, {
        ...newTransaction,
      });

      setTransactions([...transactions, response.data]);
    },
    [transactions]
  );

  const editTransaction = useCallback(
    async (newTransaction: ITransaction) => {
      const { uid } = newTransaction;
      // eslint-disable-next-line
      const response = await api.put(`transactions/${uid}`, {
        ...newTransaction,
      });

      setTransactions([...transactions, response.data]);
    },
    [transactions]
  );

  const deleteTransaction = useCallback(
    async (uid: string | null) => {
      await api.delete(`transactions/${uid ?? ""}`).then(() => {
        const newTransactions = transactions.filter(
          (transaction) => transaction.uid !== uid
        );
        setTransactions(newTransactions);
      });
    },
    [transactions]
  );

  const toggleTransactionDrawer = useCallback(
    (drawer: ITransactionDrawer) => setTransactionDrawer(drawer),
    []
  );

  useEffect(() => {
    void fetchTransactions();
  }, []);

  const contextValue = useMemo(
    () => ({
      transactions,
      selectedTransaction,
      createTransaction,
      updateSelectedTransaction,
      editTransaction,
      deleteTransaction,
      transactionDrawer,
      toggleTransactionDrawer,
    }),
    [
      transactions,
      selectedTransaction,
      createTransaction,
      updateSelectedTransaction,
      editTransaction,
      deleteTransaction,
      transactionDrawer,
      toggleTransactionDrawer,
    ]
  );

  return (
    <TransactionContext.Provider value={contextValue}>
      {children}
    </TransactionContext.Provider>
  );
};
