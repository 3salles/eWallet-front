import VerticalBarChart from "@/components/atoms/Charts/VerticalBarChart";
import Card from "@/components/molecules/Card";
import { Heading, VStack } from "@chakra-ui/react";

export const StatisticsSection = () => {
  return (
    <VStack w="100%" spacing={2} alignItems="flex-start">
      <Heading fontSize="2xl">Estatísticas</Heading>
      <Card p={0} maxW="fit-content" maxH="fit-content">
        <VerticalBarChart />
      </Card>
    </VStack>
  );
};
