import { HStack, Image, Text } from "@chakra-ui/react";

export const Logo = () => {
  return (
    <HStack>
      <Image
        src="https://github.com/3salles/eWallet-front/assets/62452619/ea02cb7d-fd95-437d-a313-55e9f9109aa5"
        width="36px"
        alt="Cofre de porco rosa recebendo uma moeda de ouro"
      />
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
