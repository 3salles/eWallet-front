import { LogoIcon } from "@/components/atoms/LogoIcon";
import { HStack, Text } from "@chakra-ui/react";

export const Logo = () => {
  return (
    <HStack>
      <LogoIcon />
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
