import { TabIndicator, Tabs } from "@chakra-ui/react";
import { TabHeader } from "./components/tabHeader";
import { Panels } from "./components/tabsPanel";
import { ReactNode } from "react";

interface TabsPanelProps {
  headers: string[];
  data: ReactNode[];
}

export const TabsPanel = ({ headers, data }: TabsPanelProps) => {
  return (
    <Tabs position="relative" variant="unstyled" isLazy w="full" h="full">
      <TabHeader headers={headers} />
      <TabIndicator
        mt="-1.5px"
        height="2px"
        bg="brand.500"
        borderRadius="1px"
      />
      <Panels dataList={data} />
    </Tabs>
  );
};
