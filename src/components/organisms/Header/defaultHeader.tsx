import { Icon } from "@/components/atoms/Icon";
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
      <Show breakpoint="(max-width: 780px)">
        <IconButton
          colorScheme="transparent"
          aria-label="Abrir menu"
          icon={<Icon name="menu" color="gray.0" />}
        />
      </Show>
      <HStack>
        <Icon name="chevron" color={["gray.0", "gray.500"]} />
        <Text color={["gray.0", "gray.500"]}>{date}</Text>
      </HStack>
    </HStack>
  );
};
