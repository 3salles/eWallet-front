import { ChartCard } from "@/components/organisms/ChartCard";
import { AppTemplate } from "@/components/templates/AppTemplate";
import { Box } from "@chakra-ui/react";

import chartDataCard from "../../../mocks/chart.json";
import { IChartCard } from "@/types";

export const OverviewPage = () => {
  const chartData = chartDataCard as IChartCard;

  return (
    <AppTemplate>
      <Box as="section">
        <ChartCard chartData={chartData} />
        <div>card</div>
      </Box>
    </AppTemplate>
  );
};
