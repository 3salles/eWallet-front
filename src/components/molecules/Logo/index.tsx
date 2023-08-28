import { HStack, Text } from "@chakra-ui/react";
import { Image } from "@chakra-ui/react";

export const Logo = () => {
  return (
    <HStack>
      <Image src="src/assets/logo.png" width="36px" />
      <Text
        fontFamily="Poppins, sans-serif"
        fontWeight={700}
        fontSize={40}
        color="brand.500"
      >
        <Text as="span" color="gray.0">
          e
        </Text>
        Wallet
      </Text>
    </HStack>
  );
};
