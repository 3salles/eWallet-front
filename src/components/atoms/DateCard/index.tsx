import { Text, VStack } from "@chakra-ui/react";
import dayjs from "dayjs";
import brLanguage from "dayjs/locale/pt-br";

export const DateCard = ({ date }: { date: string }) => {
  const month = dayjs(date).locale(brLanguage).format("MMM");
  const day = dayjs(date).locale(brLanguage).format("DD");

  return (
    <VStack w="44px" h="66px" p="2" bg="gray.100" borderRadius="lg">
      <Text fontSize="xs" textTransform="capitalize">
        {month}
      </Text>
      <Text fontSize="xl" fontWeight={700}>
        {day}
      </Text>
    </VStack>
  );
};
