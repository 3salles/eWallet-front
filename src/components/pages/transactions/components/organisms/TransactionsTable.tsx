import { Table } from "@/components/atoms/Table";
import { ITransaction } from "@/types";
import { TableHeader } from "../atoms/TableHeader";
import { TableBody } from "../atoms/TableBody";
import { VStack } from "@chakra-ui/react";
import { Button } from "@/components/atoms/Button";
import { useState } from "react";
import transactionsMock from "@/mocks/transactions.json";

export const TransactionsTable = () => {
  const [elementsSize, setElementsSize] = useState(6);

  const tableHeader = ["Nome", "Instituição", "Data", "Categoria", "Valor"];

  const transactions = transactionsMock.data as ITransaction[];

  const handleLoadMore = () => setElementsSize((old) => old + 6);

  return (
    <VStack spacing={8}>
      <Table
        header={<TableHeader headers={tableHeader} />}
        body={<TableBody data={transactions} elements={elementsSize} />}
      />
      {transactions.length > elementsSize && (
        <Button
          label="Mostrar mais"
          variant="outline"
          onClick={handleLoadMore}
        />
      )}
    </VStack>
  );
};
