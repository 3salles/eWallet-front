import { ICategories, ITransaction } from "@/types";
import { NumberUtils } from "@/utils/number.utils";
import { Td, Tr } from "@chakra-ui/react";
import dayjs from "dayjs";
import { CategoryRow } from "../atoms/CategoryRow";

interface TableBodyProps {
  data: ITransaction[];
  elements: number;
  handleSelectTransaction: (transaction: ITransaction) => void;
}

export const TableBody = ({
  data,
  elements,
  handleSelectTransaction,
}: TableBodyProps) => {
  return (
    <>
      {data?.slice(0, elements).map((item) => (
        <Tr
          key={item.uid}
          borderTop="1px"
          borderColor="gray.100"
          onClick={() => handleSelectTransaction(item)}
          cursor="pointer"
        >
          <Td p={4} textAlign="center">
            {item.description}
          </Td>
          <Td p={4} textAlign="center">
            {item.institution ? item.institution : "-"}
          </Td>
          <Td p={4} textAlign="center">
            {dayjs(item.date).format("DD/MM/YYYY")}
          </Td>
          <CategoryRow category={item.category as ICategories} />
          <Td p={4} textAlign="center">
            {NumberUtils.moneyFormatter(item.amount)}
          </Td>
        </Tr>
      ))}
    </>
  );
};
