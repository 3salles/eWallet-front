import { Table } from "@/components/atoms/Table";
import { ITransaction } from "@/types";
import { TableHeader } from "../atoms/TableHeader";

import { VStack } from "@chakra-ui/react";
import { Button } from "@/components/atoms/Button";
import { useState } from "react";
import { TableBody } from "../molecules/TableBody";
import useWindowDimensions from "@/hooks/useWindowsDimenions";
import useTransactionContext from "@/hooks/useTransactionContext";

export const TransactionsTable = () => {
  const { width } = useWindowDimensions();
  const { transactions, toggleTransactionDrawer } = useTransactionContext();

  const [elementsSize, setElementsSize] = useState(width > 1550 ? 8 : 5);

  const tableHeader = ["Nome", "Instituição", "Data", "Categoria", "Valor"];

  const handleLoadMore = () => setElementsSize((old) => old + 6);
  const handleSelectedTransaction = (transaction: ITransaction) =>
    toggleTransactionDrawer({
      transaction: transaction,
      type: "edit",
      visible: true,
    });

  return (
    <VStack spacing={8}>
      <Table
        header={<TableHeader headers={tableHeader} />}
        body={
          <TableBody
            handleSelectTransaction={handleSelectedTransaction}
            data={transactions}
            elements={elementsSize}
          />
        }
      />
      {transactions?.length > elementsSize && (
        <Button
          label="Mostrar mais"
          variant="outline"
          onClick={handleLoadMore}
        />
      )}
    </VStack>
  );
};
