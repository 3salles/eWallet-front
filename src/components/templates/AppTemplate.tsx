import { Hide, Stack } from "@chakra-ui/react";
import { Sidebar } from "../organisms/Sidebar";
import { ReactNode } from "react";
import { Header } from "../organisms/Header";

export const AppTemplate = ({ children }: { children: ReactNode }) => {
  return (
    <Stack flexDir={["column", "row"]} as="article" h="100vh" spacing={0}>
      <Hide breakpoint="(max-width: 780px)">
        <Sidebar />
      </Hide>

      <Stack as="section" w="100%" px={[0, 6]} py={[0, 8]} bg="gray.50">
        <Header type="default" />
        {children}
      </Stack>
    </Stack>
  );
};
