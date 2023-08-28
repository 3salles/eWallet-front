import GaugeChart from "@/components/atoms/Charts/GaugeChart";
import { AppTemplate } from "@/components/templates/AppTemplate";
import { Box } from "@chakra-ui/react";

export const OverviewPage = () => {
  return (
    <AppTemplate>
      <Box as="section">
        <GaugeChart />
        <div>card</div>
      </Box>
    </AppTemplate>
  );
};
