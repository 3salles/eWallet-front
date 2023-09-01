import { ChartCard } from "@/components/organisms/ChartCard";
import { Hide, Stack } from "@chakra-ui/react";
import { ChartTypeEnum } from "@/types";

import transactionsResume from "@/mocks/transactionResume.json";
import goalsResume from "@/mocks/goalsResume.json";
import { BillsCard } from "../organisms/BillsCard";

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
//NOTE - Add horizontal scroll on mobile

export const ChartsSection = () => {
  return (
    <Stack
      as="section"
      direction={["column", "row"]}
      w="100%"
      alignItems={["center"]}
      justifyContent={["center", "center", "space-around"]}
    >
      <Hide breakpoint="(max-width: 780px)">
        {chartSection.map((section) => (
          <ChartCard
            key={section.type}
            type={section.type}
            chartData={section.data}
            legend={section.legend}
          />
        ))}
      </Hide>
      <BillsCard />
    </Stack>
  );
};