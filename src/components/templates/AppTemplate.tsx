import { Stack } from "@chakra-ui/react";
import { Sidebar } from "../organisms/Sidebar";
import { ReactNode } from "react";

export const AppTemplate = ({ children }: { children: ReactNode }) => {
  return (
    <Stack flexDir={["column", "row"]} as="article" h="100%">
      <Sidebar />
      {children}
    </Stack>
  );
};
