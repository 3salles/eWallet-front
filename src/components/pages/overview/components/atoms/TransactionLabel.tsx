import { ITransaction } from "@/types";
import { Text, VStack } from "@chakra-ui/react";

type TransactionLabelProps = Pick<ITransaction, "description" | "institution">;

export const TransactionLabel = ({
  description,
  institution,
}: TransactionLabelProps) => {
  return (
    <VStack alignItems="flex-start" spacing={0}>
      <Text fontWeight={700}>{description}</Text>
      <Text color="gray.200" fontSize="xs">
        {institution}
      </Text>
    </VStack>
  );
};
