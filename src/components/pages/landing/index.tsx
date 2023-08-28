import { Flex } from "@chakra-ui/react";

import { Header } from "@/components/organisms/Header";
import { HeaderSection } from "./components/templates/header-section";
import { ImageSection } from "./components/templates/image-section";

export const LandingPage = () => {
  return (
    <Flex as="section" bg="gray.50" height="100%" flexDir="column">
      <Header />
      <HeaderSection />
      <ImageSection />
    </Flex>
  );
};
