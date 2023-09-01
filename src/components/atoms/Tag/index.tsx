import { IStatusBill } from "@/types/bills.types";
import { Tag as ChakraTag } from "@chakra-ui/react";

interface TagProps {
  type: IStatusBill;
}

export const Tag = ({ type }: TagProps) => {
  const tagColorScheme = {
    pending: {
      color: "orange.500",
      bg: "orange.50",
      label: "Pendente",
    },
    paid: {
      color: "green.500",
      bg: "green.50",
      label: "Paga",
    },
    expired: {
      color: "red.500",
      bg: "red.50",
      label: "Atrasada",
    },
  };

  const tag = tagColorScheme[type];

  return (
    <ChakraTag
      size="sm"
      color={tag.color}
      border="1px"
      borderColor={tag.color}
      bg={tag.bg}
      textTransform="uppercase"
      fontSize="xs"
    >
      {tag.label}
    </ChakraTag>
  );
};
