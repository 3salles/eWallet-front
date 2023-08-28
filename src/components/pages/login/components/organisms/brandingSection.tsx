import { Hide, Image, Text, VStack } from "@chakra-ui/react";

export const BrandingSection = () => {
  return (
    <Hide breakpoint="(max-width: 780px)">
      <VStack as="section" justifyContent="center" w="50%" bg="purple.900">
        <Image src="src/assets/images/money-chart.png" h={580} />
        <Text fontSize="2xl" color="gray.0" fontWeight={700}>
          Organize suas financias com o eWallet!
        </Text>
      </VStack>
    </Hide>
  );
};
