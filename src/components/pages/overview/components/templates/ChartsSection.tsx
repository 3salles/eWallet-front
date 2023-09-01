import { ChartCard } from "@/components/organisms/ChartCard";
import { Heading, Hide, Stack, VStack } from "@chakra-ui/react";
import { ChartTypeEnum } from "@/types";

import transactionsResume from "@/mocks/transactionResume.json";
import goalsResume from "@/mocks/goalsResume.json";
import { BillsCard } from "../organisms/BillsCard";

const chartSection = [
  {
    type: ChartTypeEnum.DONUT,
    data: transactionsResume,
    legend: "Saída x Saldo",
    title: "Visão Geral",
  },
  {
    type: ChartTypeEnum.GAUGE,
    data: goalsResume,
    legend: "Saldo x Meta",
    title: "Objetivos",
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
          <VStack
            key={section.type}
            w="100%"
            alignItems="flex-start"
            spacing={2}
          >
            <Heading fontSize="2xl">{section.title}</Heading>
            <ChartCard
              type={section.type}
              chartData={section.data}
              legend={section.legend}
            />
          </VStack>
        ))}
      </Hide>
      <VStack w="100%" spacing={2} alignItems="flex-start">
        <Heading fontSize="2xl">Contas</Heading>
        <BillsCard />
      </VStack>
    </Stack>
  );
};
