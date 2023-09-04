import {
  Table as ChakraTable,
  TableContainer,
  Tbody,
  Thead,
  Tr,
} from "@chakra-ui/react";
import { ReactNode } from "react";

interface TableProps {
  header: ReactNode;
  body: ReactNode;
}

export const Table = ({ header, body }: TableProps) => {
  return (
    <TableContainer w="full">
      <ChakraTable variant="unstyled">
        <Thead>
          <Tr fontFamily="Inter, sans-serif">{header}</Tr>
        </Thead>
        <Tbody>{body}</Tbody>
      </ChakraTable>
    </TableContainer>
  );
};
