import { Divider } from "@chakra-ui/react";

import { ITransaction } from "@/types";
import { TransactionCard } from "./TransactionCard";
import useTransactionContext from "@/hooks/useTransactionContext";

interface TransactionListProps {
  filter: "income" | "outcome" | "all";
}
// REFACTOR - When get info from API, just receive an array with transactions

export const TransactionsList = ({ filter }: TransactionListProps) => {
  const { transactions } = useTransactionContext();

  const outcomeTransactions = transactions.filter(
    (transaction) => transaction.category !== "income"
  );
  const incomeTransactions = transactions.filter(
    (transaction) => transaction.category === "income"
  );

  const getArrayLength = (data: ITransaction[]) => {
    return data.slice(0, 4).length - 1;
  };

  if (filter === "all") {
    return transactions.slice(0, 4).map((transaction, index) => (
      <>
        <TransactionCard key={transaction.uid} transaction={transaction} />
        {index !== getArrayLength(transactions) && (
          <Divider style={{ color: "#F4F5F7" }} />
        )}
      </>
    ));
  }

  if (filter === "income") {
    return incomeTransactions.slice(0, 4).map((transaction, index) => (
      <>
        <TransactionCard key={transaction.uid} transaction={transaction} />
        {index !== getArrayLength(incomeTransactions) && (
          <Divider style={{ color: "#F4F5F7" }} />
        )}
      </>
    ));
  }

  return outcomeTransactions.slice(0, 4).map((transaction, index) => (
    <>
      <TransactionCard key={transaction.uid} transaction={transaction} />
      {index !== getArrayLength(outcomeTransactions) && (
        <Divider style={{ color: "#F4F5F7" }} />
      )}
    </>
  ));
};
