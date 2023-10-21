import { Th } from "@chakra-ui/react";

export const TableHeader = ({ headers }: { headers: string[] }) => {
  return (
    <>
      {headers.map((header) => (
        <Th p={4} textAlign="center" key={header}>
          {header}
        </Th>
      ))}
    </>
  );
};
