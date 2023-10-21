import { Table } from "@/components/atoms/Table";
import { TableHeader } from "@/components/atoms/Table/TableHeader";
import { BillsTableBody } from "../atoms/billTableBody";
import billsResume from "@/mocks/billsResume.json";
import { IBill } from "@/types";
import { useState } from "react";
import useWindowDimensions from "@/hooks/useWindowsDimenions";
import { VStack } from "@chakra-ui/react";
import { Button } from "@/components/atoms/Button";

export const BillsTable = () => {
  const { width } = useWindowDimensions();
  const bills = billsResume.data as IBill[];

  const headers = ["Vencimento", "Nome", "Valor", "Status"];

  const [elementsSize, setElementsSize] = useState(width > 1550 ? 8 : 5);

  const handleLoadMore = () => setElementsSize((old) => old + 6);

  return (
    <VStack spacing={8}>
      <Table
        header={<TableHeader headers={headers} />}
        body={<BillsTableBody data={bills} elements={elementsSize} />}
      />
      {bills?.length > elementsSize && (
        <Button
          label="Mostrar mais"
          variant="outline"
          onClick={handleLoadMore}
        />
      )}
    </VStack>
  );
};
