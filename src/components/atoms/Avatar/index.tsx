import useUserContext from "@/hooks/useUserContext";
import { Avatar as ChakraAvatar, HStack, Text } from "@chakra-ui/react";

export const Avatar = () => {
  const { user } = useUserContext();

  return (
    <HStack spacing={4}>
      <ChakraAvatar size="sm" name={user?.name} />
      <Text fontWeight={700} color="gray.0">
        {user?.name}
      </Text>
    </HStack>
  );
};
