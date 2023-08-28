import { Avatar as ChakraAvatar, HStack, Text } from "@chakra-ui/react";

export const Avatar = () => {
  return (
    <HStack spacing={4}>
      <ChakraAvatar size="sm" name="John Doe" />
      <Text fontWeight={700} color="gray.0">
        John Doe
      </Text>
    </HStack>
  );
};
