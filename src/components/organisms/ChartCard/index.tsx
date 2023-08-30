import Card from "@/components/molecules/Card";
import { Divider, HStack, Heading, Text, VStack } from "@chakra-ui/react";
import { FinancialLabelInfo } from "./components/atoms/FinancialLabelInfo";
import DonutsChart from "@/components/atoms/Charts/DonutCharts";
import { IChartCard } from "@/types";
import GaugeChart from "@/components/atoms/Charts/GaugeChart";
import { BarChart } from "recharts";

interface ChartCardProps {
  chartData: IChartCard;
}

export const ChartCard = ({ chartData }: ChartCardProps) => {
  const DisplayChart = {
    donut: <DonutsChart />,
    gauge: <GaugeChart />,
    bar: <BarChart />,
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
            <FinancialLabelInfo labelInfo={chartData?.outcome} />
            <FinancialLabelInfo labelInfo={chartData?.income} />
          </VStack>
          <VStack>
            {DisplayChart[chartData.chartType]}
            <Text color="gray.600">{chartData?.chartLegend}</Text>
          </VStack>
        </HStack>
      </VStack>
    </Card>
  );
};
