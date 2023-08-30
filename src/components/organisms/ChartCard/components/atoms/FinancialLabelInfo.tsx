import { Icon } from "@/components/atoms/Icon";
import { IFinancialInfo } from "@/types";
import { HStack, Text, VStack } from "@chakra-ui/react";

interface FinancialLabelInfoProps {
  labelInfo: IFinancialInfo;
}

export const FinancialLabelInfo = ({ labelInfo }: FinancialLabelInfoProps) => {
  return (
    <VStack alignItems="flex-start">
      <HStack>
        <Icon name={labelInfo?.icon} color={labelInfo?.color} />
        <Text color={labelInfo?.color}>{labelInfo?.label}</Text>
      </HStack>
      <Text fontWeight={700} color={labelInfo?.color}>
        {labelInfo?.value}
      </Text>
    </VStack>
  );
};
