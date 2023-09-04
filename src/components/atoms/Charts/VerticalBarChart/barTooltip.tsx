/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */

import { NumberUtils } from "@/utils/number.utils";
import { Box, Text } from "@chakra-ui/react";

export const BarTooltip = (data: any) => {
  const mothStatistics = data.data.find(
    (value: any) => value.month === data.label
  );

  return (
    <Box bg="gray.0" p={2} borderRadius="lg">
      <Text>{data?.label}</Text>
      <Text color="brand.500">
        {NumberUtils.moneyFormatter(mothStatistics?.income ?? 0)}
      </Text>
      <Text color="red.500">
        {NumberUtils.moneyFormatter(mothStatistics?.outcome ?? 0)}
      </Text>
    </Box>
  );
};
