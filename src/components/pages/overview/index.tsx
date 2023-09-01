import { AppTemplate } from "@/components/templates/AppTemplate";
import { ChartsSection } from "./components/templates/ChartsSection";
import { VStack } from "@chakra-ui/react";

export const OverviewPage = () => {
  return (
    <AppTemplate>
      <VStack px={[4, 0]} py={[6, 9]}>
        <ChartsSection />
      </VStack>
    </AppTemplate>
  );
};
