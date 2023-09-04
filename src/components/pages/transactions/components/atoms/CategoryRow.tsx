import { CategoryIcon } from "@/components/molecules/CategoryIcon";
import { ICategories } from "@/types";
import { textUtils } from "@/utils/text.utils";
import { HStack, Td, Text } from "@chakra-ui/react";

export const CategoryRow = ({ category }: { category: ICategories }) => {
  return (
    <Td p={4}>
      <HStack justifyContent="center">
        <CategoryIcon category={category} showBackground={false} />
        <Text>{textUtils.translateCategories(category)}</Text>
      </HStack>
    </Td>
  );
};
