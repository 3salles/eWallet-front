import { AppTemplate } from "@/components/templates/AppTemplate";
import { ChartsSection } from "./components/templates/ChartsSection";
import { HStack, Heading, Stack, VStack } from "@chakra-ui/react";
import { TransactionsSection } from "./components/templates/TransactionsSection";
import { StatisticsSection } from "./components/templates/StatisticsSection";

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
        </Stack>
      </VStack>
    </AppTemplate>
  );
};
