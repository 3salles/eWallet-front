import { Flex } from "@chakra-ui/react";

import { Header } from "@/components/organisms/Header";
import { Footer } from "@/components/organisms/Footer";
import { HeaderSection } from "./components/organisms/headerSection";
import { ImageSection } from "./components/organisms/imageSection";

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
