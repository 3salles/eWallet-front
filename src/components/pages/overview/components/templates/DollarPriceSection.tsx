import { ChartAdapters } from "@/adapters/ChartAdapters";
import { AreaChart } from "@/components/atoms/Charts/AreaChart";
import Card from "@/components/molecules/Card";
import { Heading, VStack } from "@chakra-ui/react";
import useExchangeContext from "@/hooks/useExchangeContext";

export const DollarPriceSection = () => {
  const { exchanges } = useExchangeContext();

  const data = ChartAdapters.areaChartAdapter(exchanges);

  return (
    <VStack w="100%" spacing={2} alignItems="flex-start">
      <Heading fontSize="2xl">Valor do Dólar</Heading>
      <Card maxW="fit-content" maxH="fit-content">
        <AreaChart data={data} />
      </Card>
    </VStack>
  );
};
