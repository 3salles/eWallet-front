import { Flex } from "@chakra-ui/react";
import { Header } from "@/ui/components/Header";

export const LandingPage = () => {
  return (
    <Flex as="section" bg="gray.50" height="100vh" flexDir="column">
      <Header />
    </Flex>
  );
};
