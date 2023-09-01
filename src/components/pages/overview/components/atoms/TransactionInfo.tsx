import { ITransaction } from "@/types";
import { DateUtils } from "@/utils/date.utils";
import { NumberUtils } from "@/utils/number.utils";
import { Text, VStack } from "@chakra-ui/react";

type TransactionInfoProps = Pick<ITransaction, "amount" | "date">;

export const TransactionInfo = ({ date, amount }: TransactionInfoProps) => {
  return (
    <VStack spacing={0}>
      <Text fontWeight={700}>{NumberUtils.moneyFormatter(amount)}</Text>
      <Text fontSize="xs" color="gray.200">
        {DateUtils.getFullDate(date)}
      </Text>
    </VStack>
  );
};
