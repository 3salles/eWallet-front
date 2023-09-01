import { Tag } from "@/components/atoms/Tag";
import { IStatusBill } from "@/types/bills.types";
import { Text, VStack } from "@chakra-ui/react";

interface BillLabelProps {
  label: string;
  status: IStatusBill;
}

export const BillLabel = ({ label, status }: BillLabelProps) => {
  return (
    <VStack justifyContent="center" gap="0">
      <Text fontWeight={700}>{label}</Text>
      <Tag type={status} />
    </VStack>
  );
};
