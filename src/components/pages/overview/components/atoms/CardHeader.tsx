import { HStack, Text } from "@chakra-ui/react";
import billsResume from "@/mocks/billsResume.json";

export const CardHeader = () => {
  const { pending_bills, expired_bills } = billsResume;

  if (pending_bills === 0 && expired_bills === 0) {
    return (
      <Text fontSize="sm" color="gray.900" textTransform="capitalize">
        Suas contas estão em dia!
      </Text>
    );
  }

  return (
    <HStack
      as="header"
      justifyContent="center"
      alignItems="center"
      w="100%"
      pb={3}
    >
      {pending_bills > 0 && (
        <Text fontSize="sm" color="gray.900" textTransform="capitalize">
          Pendentes: {pending_bills}
        </Text>
      )}
      {expired_bills > 0 && (
        <Text fontSize="sm" color="red.500" textTransform="capitalize">
          Atrasadas: {expired_bills}
        </Text>
      )}
    </HStack>
  );
};
