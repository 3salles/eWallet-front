import { Avatar } from "@/components/atoms/Avatar";
import { LinkLabel } from "@/components/molecules/LinkLabel";
import { VStack, Divider } from "@chakra-ui/react";

export const FooterMenu = () => {
  return (
    <VStack spacing={8} w="100%">
      <LinkLabel label="Sair" redirect="/" icon="logout" />
      <Divider />
      <Avatar />
    </VStack>
  );
};
