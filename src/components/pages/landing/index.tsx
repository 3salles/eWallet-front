import { Flex } from "@chakra-ui/react";

import { Header } from "@/components/organisms/Header";
import { HeaderSection } from "./components/organisms/header-section";
import { ImageSection } from "./components/organisms/image-section";
import { Footer } from "@/components/organisms/Footer";

export const LandingPage = () => {
  return (
    <Flex as="section" bg="gray.50" height="100%" flexDir="column">
      <Header />
      <HeaderSection />
      <ImageSection />
      <Footer />
    </Flex>
  );
};
