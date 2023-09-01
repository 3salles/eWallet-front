import { NumberUtils } from "@/utils/number.utils";
import { Box } from "@chakra-ui/react";

export const AmountCard = ({ amount }: { amount: number }) => {
  return (
    <Box
      border="1px"
      borderColor="gray.100"
      borderRadius="lg"
      fontWeight={700}
      px={3}
      py={2}
    >
      {NumberUtils.moneyFormatter(amount)}
    </Box>
  );
};
