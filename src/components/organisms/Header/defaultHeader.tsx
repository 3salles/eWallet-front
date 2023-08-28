import { Icon } from "@/components/atoms/Icon";
import { MenuDrawer } from "@/components/molecules/MenuDrawer";
import { HStack, IconButton, Show, Text } from "@chakra-ui/react";

import dayjs from "dayjs";
import brLanguage from "dayjs/locale/pt-br";

export const DefaultHeader = () => {
  const date = dayjs().locale(brLanguage).format("DD [de] MMM [de] YYYY");

  return (
    <HStack
      bg={["purple.900", "transparent"]}
      px={[6]}
      py={[4, 8]}
      justifyContent={["space-between", "flex-start"]}
    >
      <MenuDrawer />
      <HStack>
        <Icon name="chevron" color={["gray.0", "gray.500"]} />
        <Text color={["gray.0", "gray.500"]}>{date}</Text>
      </HStack>
    </HStack>
  );
};
