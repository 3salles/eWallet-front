import { Tab, TabList } from "@chakra-ui/react";

interface TabHeaderProps {
  headers: string[];
}

export const TabHeader = ({ headers }: TabHeaderProps) => {
  return (
    <TabList color="gray.600">
      {headers.map((header) => (
        <Tab
          key={header}
          _selected={{ color: "brand.500" }}
          _hover={{ color: "brand.500" }}
          fontWeight={700}
        >
          {header}
        </Tab>
      ))}
    </TabList>
  );
};
