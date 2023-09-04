/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
import { NumberUtils } from "@/utils/number.utils";
import { Box, Text } from "@chakra-ui/react";

export const BarTooltip = (data: any) => {
  const dayPrice = data.data.find((value: any) => value.date === data.label);

  // return (
  //   <Box bg="gray.0" p={2} borderRadius="lg">
  //     <p>{data.label}</p>
  //     <Text color="brand.500">
  //       {NumberUtils.moneyFormatter(dayPrice?.value ?? 0)}
  //     </Text>
  //   </Box>
  // );

  return <p>:p</p>;
};
