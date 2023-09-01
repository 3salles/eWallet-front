import { HStack } from "@chakra-ui/react";
import { TransactionDescription } from "../molecules/TransactionDescription";
import { TransactionInfo } from "../atoms/TransactionInfo";
import { ITransaction } from "@/types";

interface TransactionCardProps {
  transaction: ITransaction;
}

export const TransactionCard = ({ transaction }: TransactionCardProps) => {
  return (
    <HStack w="full" justifyContent="space-between" py={6}>
      <TransactionDescription
        description={transaction.description}
        institution={transaction.institution}
        category={transaction.category}
      />
      <TransactionInfo date={transaction.date} amount={transaction.amount} />
    </HStack>
  );
};
