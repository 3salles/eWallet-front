import useAuthContext from "@/hooks/useAuthContext";
import { Avatar as ChakraAvatar, HStack, Text } from "@chakra-ui/react";

export const Avatar = () => {
  const { user } = useAuthContext();
  return (
    <HStack spacing={4}>
      <ChakraAvatar size="sm" name={user.name} />
      <Text fontWeight={700} color="gray.0">
        {user.name}
      </Text>
    </HStack>
  );
};
