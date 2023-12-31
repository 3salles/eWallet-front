import { ICardInfoType } from "@/types";
import { NumberUtils } from "@/utils/number.utils";
import { Text, VStack } from "@chakra-ui/react";
import { LabelInfo } from "./LabelInfo";

interface CardInfoProps {
  type: ICardInfoType;
  value: number;
}

export const CardInfo = ({ type, value }: CardInfoProps) => {
  const color = {
    income: "gray.900",
    outcome: "red.500",
    amount: "gray.900",
    goal: "gray.900",
  };

  return (
    <VStack alignItems="flex-start">
      <LabelInfo type={type} />
      <Text fontWeight={700} color={color[type]}>
        {NumberUtils.moneyFormatter(value)}
      </Text>
    </VStack>
  );
};
