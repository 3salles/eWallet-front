import { HStack } from "@chakra-ui/react";
import { HeroImage } from "../../molecules/heroImage";

export const ImageSection = () => {
  return (
    <HStack
      as="section"
      mt="74px"
      flexDir={["column", "row"]}
      justifyContent="space-between"
      bg="brand.50"
      px={8}
      py={16}
    >
      <HeroImage />
    </HStack>
  );
};
