import uuid from "@/utils/uuid";
import { TabPanel, TabPanels } from "@chakra-ui/react";
import { ReactNode } from "react";

export const Panels = ({ dataList }: { dataList: ReactNode[] }) => {
  return (
    <TabPanels w="full">
      {dataList.map((data) => (
        <TabPanel key={uuid()}>
          <p>{data}</p>
        </TabPanel>
      ))}
    </TabPanels>
  );
};
