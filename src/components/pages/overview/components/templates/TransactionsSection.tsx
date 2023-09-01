import Card from "@/components/molecules/Card";
import { TabsPanel } from "@/components/organisms/TabPanel";
import { Heading, VStack } from "@chakra-ui/react";
import { TransactionsList } from "../organisms/TransactionsList";

export const TransactionsSection = () => {
  const headers = ["Todas", "Entradas", "Saídas"];
  const panelsList = [
    <TransactionsList key="0" filter="all" />,
    <TransactionsList key="1" filter="income" />,
    <TransactionsList key="2" filter="outcome" />,
  ];

  return (
    <VStack w="100%" spacing={2} alignItems="flex-start" maxW="440px">
      <Heading fontSize="2xl">Transações</Heading>
      <Card maxH="full">
        <TabsPanel headers={headers} data={panelsList} />
      </Card>
    </VStack>
  );
};
