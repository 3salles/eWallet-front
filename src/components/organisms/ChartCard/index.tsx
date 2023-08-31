import Card from "@/components/molecules/Card";
import { Divider, HStack, Heading, Text, VStack } from "@chakra-ui/react";

import { IChartType } from "@/types";
import { Chart } from "./components/atoms/Chart";
import transactionsResume from "@/mocks/transactionResume.json";
import { CardInfo } from "./components/atoms/CardInfo";
import { ChartAdapters } from "@/adpaters/ChartAdapters";
import { ITransactionResume } from "@/types/transactions";
import { IGoalsResume } from "@/types/goals";

interface ChartCardProps {
  chartData: ITransactionResume | IGoalsResume;
  type: IChartType;
  legend: string;
}

export const ChartCard = ({ chartData, type, legend }: ChartCardProps) => {
  const data = {
    donut: ChartAdapters.donutChartAdapter(chartData as ITransactionResume),
    bar: ChartAdapters.donutChartAdapter(chartData as ITransactionResume),
    gauge: ChartAdapters.gaugeChartAdapter(chartData as IGoalsResume),
  };

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
            <Chart type={type} chartData={data[type]} />
            <Text color="gray.600">{legend}</Text>
          </VStack>
        </HStack>
      </VStack>
    </Card>
  );
};
