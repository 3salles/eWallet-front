import { Icon } from "@/components/atoms/Icon";
import { MenuDrawer } from "@/components/molecules/MenuDrawer";
import { DateUtils } from "@/utils/date.utils";
import { HStack, Text } from "@chakra-ui/react";

export const DefaultHeader = () => {
  const date = DateUtils.getFullDate("");

  return (
    <HStack
      bg={["purple.900", "transparent"]}
      px={[6, 0]}
      py={[4, 0]}
      justifyContent={["space-between", "flex-start"]}
      borderBottom={["none", "1px"]}
      w="100%"
      style={{ borderBottomColor: "#9F9F9F" }}
    >
      <MenuDrawer />
      <HStack pb={[0, 9]}>
        <Icon name="chevron" color={["gray.0", "gray.500"]} />
        <Text color={["gray.0", "gray.500"]}>{date}</Text>
      </HStack>
    </HStack>
  );
};
