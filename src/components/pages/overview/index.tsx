import DonutsChart from "@/components/atoms/Charts/DonutCharts";
import { AppTemplate } from "@/components/templates/AppTemplate";
import { Box } from "@chakra-ui/react";

export const OverviewPage = () => {
  return (
    <AppTemplate>
      <Box as="section">
        <DonutsChart />
        <div>card</div>
      </Box>
    </AppTemplate>
  );
};
