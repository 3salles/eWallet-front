import { Flex } from "@chakra-ui/react";
import { BrandingSection } from "./components/organisms/brandingSection";
import { FormSection } from "./components/organisms/formSection";

export const LoginPage = () => {
  return (
    <Flex
      as="article"
      bg={["purple.900", "gray.50"]}
      h="100vh"
      justifyContent="space-between"
    >
      <FormSection />
      <BrandingSection />
    </Flex>
  );
};
