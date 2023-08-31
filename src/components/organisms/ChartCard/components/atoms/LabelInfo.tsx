import { Icon } from "@/components/atoms/Icon";
import { ICardInfoType } from "@/types";
import { HStack, Text } from "@chakra-ui/react";

export const LabelInfo = ({ type }: { type: ICardInfoType }) => {
  const icon = {
    income: <Icon name="wallet" color="brand.500" />,
    outcome: <Icon name="credit" color="red.500" />,
    amount: <Icon name="medal" color="gray.500" />,
    goal: <Icon name="target" color="gray.500" />,
  };

  const text = {
    income: <Text color="brand.500">Entrada</Text>,
    outcome: <Text color="red.500">Saída</Text>,
    amount: <Text color="gray.500">Saldo</Text>,
    goal: <Text color="gray.500">Meta</Text>,
  };

  return (
    <HStack>
      {icon[type]}
      {text[type]}
    </HStack>
  );
};
