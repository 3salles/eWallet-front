import { Stack } from "@chakra-ui/react";
import { Sidebar } from "../organisms/Sidebar";
import { ReactNode } from "react";
import { Header } from "../organisms/Header";

export const AppTemplate = ({ children }: { children: ReactNode }) => {
  return (
    <Stack flexDir={["column", "row"]} as="article" h="100%">
      <Sidebar />
      <Stack as="section">
        <Header type="default" />
        {children}
      </Stack>
    </Stack>
  );
};
