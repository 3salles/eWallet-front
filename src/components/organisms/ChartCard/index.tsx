import Card from "@/components/molecules/Card";
import { Divider, HStack, Heading, Text, VStack } from "@chakra-ui/react";

import { ICardInfoType, IChartType } from "@/types";
import { Chart } from "./components/atoms/Chart";
import { CardInfo } from "./components/atoms/CardInfo";

import { ITransactionResume } from "@/types";
import { IGoalsResume } from "@/types/goals";
import { NumberUtils } from "@/utils/number.utils";
import dayjs from "dayjs";
import brLanguage from "dayjs/locale/pt-br";
import { ChartAdapters } from "@/adapters/ChartAdapters";

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

  const goalsData = chartData as IGoalsResume;
  const transactionsData = chartData as ITransactionResume;

  const date = dayjs().locale(brLanguage).format("MMMM, YYYY");

  const labels = {
    donut: [
      {
        type: "outcome",
        value: transactionsData?.outcome_amount,
      },
      {
        type: "income",
        value: transactionsData?.income_amount,
      },
    ],
    gauge: [
      {
        type: "amount",
        value: goalsData?.amount,
      },
      {
        type: "goal",
        value: goalsData?.goal_value,
      },
    ],
    bar: [],
  };

  return (
    <Card>
      <VStack w="100%">
        <HStack as="header" justifyContent="space-between" w="100%" pb={3}>
          <Heading size="md" color="brand.500">
            {NumberUtils.moneyFormatter(chartData.amount)}
          </Heading>
          <Text fontSize="sm" color="gray.600" textTransform="capitalize">
            {type === "donut" ? date : goalsData.main_goal}
          </Text>
        </HStack>
        <Divider style={{ color: "#F4F5F7" }} />
        <HStack w="100%" justifyContent="space-between">
          <VStack spacing={5}>
            {labels[type].map((label) => (
              <CardInfo
                key={label.type}
                type={label.type as ICardInfoType}
                value={label.value}
              />
            ))}
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
