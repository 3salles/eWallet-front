import { Icon } from "@/components/atoms/Icon";
import { ICategories } from "@/types/category.types";
import { Flex } from "@chakra-ui/react";

export const CategoryIcon = ({
  category,
}: {
  category: ICategories | null;
}) => {
  return (
    <Flex borderRadius="lg" bg="gray.50" p={2}>
      {category && <Icon name={category} color="gray.600" />}
    </Flex>
  );
};
