import { Flex } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Flex
      as="footer"
      bottom={0}
      position="fixed"
      bg="purple.900"
      w="100%"
      color="gray.0"
      justifyContent="center"
      p={4}
      mt={[0, "56px"]}
    >
      &copy; 2023 eWallet
    </Flex>
  );
};
