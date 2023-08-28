import VerticalBarChart from "@/components/atoms/Charts/VerticalBarChart";
import { AppTemplate } from "@/components/templates/AppTemplate";
import { Box } from "@chakra-ui/react";

export const OverviewPage = () => {
  return (
    <AppTemplate>
      <Box as="section">
        <VerticalBarChart />
        <div>card</div>
      </Box>
    </AppTemplate>
  );
};
