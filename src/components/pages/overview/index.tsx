import { ChartCard } from "@/components/organisms/ChartCard";
import { AppTemplate } from "@/components/templates/AppTemplate";
import { Stack } from "@chakra-ui/react";
import { ChartTypeEnum } from "@/types";

import transactionsResume from "@/mocks/transactionResume.json";
import goalsResume from "@/mocks/goalsResume.json";

const chartSection = [
  {
    type: ChartTypeEnum.DONUT,
    data: transactionsResume,
    legend: "Saída x Saldo",
  },
  {
    type: ChartTypeEnum.GAUGE,
    data: goalsResume,
    legend: "Saldo x Meta",
  },
];

export const OverviewPage = () => {
  return (
    <AppTemplate>
      <Stack as="section" direction={["column", "row"]} w="100%">
        {chartSection.map((section) => (
          <ChartCard
            type={section.type}
            chartData={section.data}
            legend={section.legend}
          />
        ))}
      </Stack>
    </AppTemplate>
  );
};
