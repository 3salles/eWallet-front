import { Icon } from "@/components/atoms/Icon";
import { ICardInfoType } from "@/types";
import { HStack, Text } from "@chakra-ui/react";

export const LabelInfo = ({ type }: { type: ICardInfoType }) => {
  const icon = {
    income: <Icon name="wallet" color="gray.600" />,
    outcome: <Icon name="credit" color="red.500" />,
    amount: <Icon name="medal" color="gray.600" />,
    goal: <Icon name="target" color="gray.600" />,
  };

  const text = {
    income: <Text color="gray.600">Entrada</Text>,
    outcome: <Text color="red.500">Saída</Text>,
    amount: <Text color="gray.600">Saldo</Text>,
    goal: <Text color="gray.600">Meta</Text>,
  };

  return (
    <HStack>
      {icon[type]}
      {text[type]}
    </HStack>
  );
};
