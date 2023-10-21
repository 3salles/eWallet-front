import { Button } from "@/components/atoms/Button";
import Card from "@/components/molecules/Card";
import { AppTemplate } from "@/components/templates/AppTemplate";
import { Box, HStack, Heading } from "@chakra-ui/react";
import { BillsTable } from "./components/molecules/billsTable";

export const BillsPage = () => {
  return (
    <AppTemplate>
      <Box mt={8} height="100%">
        <HStack as="header" justifyContent="space-between">
          <Heading fontSize="2xl" color="gray.400">
            Contas Recorrentes
          </Heading>
          <Button label="Adicionar Conta" />
        </HStack>
        <Card maxH="full" maxW="full" mt={4}>
          <BillsTable />
        </Card>
      </Box>
    </AppTemplate>
  );
};
