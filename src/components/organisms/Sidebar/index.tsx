import { Hide, VStack } from "@chakra-ui/react";

import { MenuLink } from "./components/menuLink";
import { FooterMenu } from "./components/footerMenu";
import { Logo } from "@/components/molecules/Logo";

export const Sidebar = () => {
  return (
    <>
      <Hide breakpoint="(max-width: 780px)">
        <VStack as="aside" bg="purple.900" px={7} py={12} spacing={8}>
          <Logo />
          <VStack spacing={60}>
            <MenuLink />
            <FooterMenu />
          </VStack>
        </VStack>
      </Hide>
    </>
  );
};
