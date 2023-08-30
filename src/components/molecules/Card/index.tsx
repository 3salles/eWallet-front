import { Card as ChakraCard } from "@chakra-ui/react";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <ChakraCard py={6} px={5} maxW="350px">
      {children}
    </ChakraCard>
  );
}
