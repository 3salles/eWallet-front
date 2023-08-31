import Card from "@/components/molecules/Card";
import { Divider, HStack, Heading, Text, VStack } from "@chakra-ui/react";

import { IChartCard } from "@/types";
import { Chart } from "./components/atoms/Chart";
import transactionsResume from "@/mocks/transactionResume.json";
import { CardInfo } from "./components/atoms/CardInfo";

interface ChartCardProps {
  chartData: IChartCard;
}

export const ChartCard = ({ chartData }: ChartCardProps) => {
  return (
    <Card>
      <VStack>
        <HStack as="header" justifyContent="space-between" w="100%" pb={3}>
          <Heading size="md">R$ 8.000,00</Heading>
          <Text fontSize="sm" color="gray.600">
            {" "}
            Agosto, 2023
          </Text>
        </HStack>
        <Divider style={{ color: "#F4F5F7" }} />
        <HStack justifyContent="space-between" w="100%">
          <VStack spacing={5}>
            <CardInfo
              type="outcome"
              value={transactionsResume.outcome_amount}
            />
            <CardInfo type="income" value={transactionsResume.income_amount} />
          </VStack>
          <VStack>
            <Chart type={chartData.chartType} />
            <Text color="gray.600">{chartData?.chartLegend}</Text>
          </VStack>
        </HStack>
      </VStack>
    </Card>
  );
};
