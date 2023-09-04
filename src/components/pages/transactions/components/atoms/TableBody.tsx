import { ITransaction } from "@/types";
import { NumberUtils } from "@/utils/number.utils";
import { Td, Tr } from "@chakra-ui/react";
import dayjs from "dayjs";

interface TableBodyProps {
  data: ITransaction[];
  elements: number;
}

export const TableBody = ({ data, elements, ...rest }: TableBodyProps) => {
  return (
    <>
      {data?.slice(0, elements).map((item) => (
        <Tr key={item.uid} borderTop="1px" borderColor="gray.100" {...rest}>
          <Td p={4} textAlign="center">
            {item.description}
          </Td>
          <Td p={4} textAlign="center">
            {item.institution ? item.institution : "-"}
          </Td>
          <Td p={4} textAlign="center">
            {dayjs(item.date).format("DD/MM/YYYY")}
          </Td>
          <Td p={4} textAlign="center">
            {item.category}
          </Td>
          <Td p={4} textAlign="center">
            {NumberUtils.moneyFormatter(item.amount)}
          </Td>
        </Tr>
      ))}
    </>
  );
};
