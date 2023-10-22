import { Divider, HStack, VStack } from "@chakra-ui/react";
import { DateCard } from "@/components/atoms/DateCard";
import { BillLabel } from "../atoms/BillsLabel";
import { AmountCard } from "../atoms/AmountCard";
import { IBill } from "@/types/bills.types";

interface BillInfoProps {
  bill: IBill;
}

export const BillInfo = ({ bill }: BillInfoProps) => {
  return (
    <VStack w="100%">
      <Divider style={{ color: "#F4F5F7" }} />
      <HStack justifyContent="space-between" w="100%">
        <HStack spacing={3}>
          <DateCard date={bill.date} />
          <BillLabel status={bill.status} label={bill.description} />
        </HStack>
        <AmountCard amount={bill.amount} />
      </HStack>
    </VStack>
  );
};
