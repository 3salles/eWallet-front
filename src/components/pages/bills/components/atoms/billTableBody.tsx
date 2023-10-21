import { DateCard } from "@/components/atoms/DateCard";
import { Tag } from "@/components/atoms/Tag";
import { IBill } from "@/types";
import { NumberUtils } from "@/utils/number.utils";
import { Td, Tr } from "@chakra-ui/react";

interface BillsTableBodyProps {
  data: IBill[];
  elements: number;
}

export const BillsTableBody = ({ data, elements }: BillsTableBodyProps) => {
  return (
    <>
      {data?.slice(0, elements).map((item, index) => (
        <Tr
          key={`${item.description}-${index}`}
          borderTop="1px"
          borderColor="gray.100"
          // onClick={() => handleSelectTransaction(item)}
          cursor="pointer"
        >
          <Td
            p={4}
            textAlign="center"
            display="flex"
            justifyContent="center"
            w="full"
          >
            <DateCard date={item.date} />
          </Td>
          <Td p={4} textAlign="center">
            {item.description}
          </Td>
          <Td p={4} textAlign="center">
            {NumberUtils.moneyFormatter(item.amount)}
          </Td>
          <Td p={4} textAlign="center">
            <Tag type={item.status} />
          </Td>
          <Td p={4} textAlign="center"></Td>
        </Tr>
      ))}
    </>
  );
};
