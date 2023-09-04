import { Icon } from "@/components/atoms/Icon";
import { ICategories } from "@/types/category.types";
import { Flex } from "@chakra-ui/react";

interface CategoryIconProps {
  category: ICategories | null;
  showBackground: boolean;
}

export const CategoryIcon = ({
  category,
  showBackground,
}: CategoryIconProps) => {
  return (
    <Flex
      borderRadius="lg"
      bg={showBackground ? "gray.50" : "transparent"}
      p={2}
    >
      {category && <Icon name={category} color="gray.600" />}
    </Flex>
  );
};
