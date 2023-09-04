import { AppTemplate } from "@/components/templates/AppTemplate";
import { ChartsSection } from "./components/templates/ChartsSection";
import { Heading, Stack, VStack } from "@chakra-ui/react";
import { TransactionsSection } from "./components/templates/TransactionsSection";
import { StatisticsSection } from "./components/templates/StatisticsSection";
import Card from "@/components/molecules/Card";
import { AreaChart } from "@/components/atoms/Charts/AreaChart";

export const OverviewPage = () => {
  return (
    <AppTemplate>
      <VStack px={[4, 0]} py={[6, 9]} spacing={9}>
        <ChartsSection />
        <Stack
          flexDir={["column-reverse", "row"]}
          justifyContent="space-between"
          w="full"
        >
          <TransactionsSection />
          <StatisticsSection />
          <VStack w="100%" spacing={2} alignItems="flex-start">
            <Heading fontSize="2xl">Cotação</Heading>
            <Card maxW="fit-content" maxH="fit-content">
              <AreaChart />
            </Card>
          </VStack>
        </Stack>
      </VStack>
    </AppTemplate>
  );
};
