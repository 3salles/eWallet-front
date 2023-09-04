import { AreaChart } from "@/components/atoms/Charts/AreaChart";
import Card from "@/components/molecules/Card";
import { Heading, VStack } from "@chakra-ui/react";

export const DollarPriceSection = () => {
  return (
    <VStack w="100%" spacing={2} alignItems="flex-start">
      <Heading fontSize="2xl">Valor do Dólar</Heading>
      <Card maxW="fit-content" maxH="fit-content">
        <AreaChart />
      </Card>
    </VStack>
  );
};
