import { Button } from "@/components/atoms/Button";
import Card from "@/components/molecules/Card";
import { TabsPanel } from "@/components/organisms/TabPanel";
import { AppTemplate } from "@/components/templates/AppTemplate";
import { Box, HStack, Heading } from "@chakra-ui/react";
import { TransactionsTable } from "./components/organisms/TransactionsTable";
import { Drawer } from "@/components/atoms/Drawer";
import { TransactionDrawer } from "./components/organisms/TransactionDrawer";

export const TransactionsPage = () => {
  const tabsHeader = ["Todas"];
  const panelsList = [<TransactionsTable key="0" />];

  return (
    <AppTemplate>
      <Box mt={8} height="100%">
        <HStack as="header" justifyContent="space-between">
          <Heading fontSize="2xl" color="gray.400">
            Histórico de Transações
          </Heading>
          <Button label="Nova Transação" />
          <TransactionDrawer />
        </HStack>
        <Card maxH="full" maxW="full" mt={6}>
          <TabsPanel headers={tabsHeader} data={panelsList} />
        </Card>
      </Box>
    </AppTemplate>
  );
};
