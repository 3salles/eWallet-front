import {
  Card as ChakraCard,
  CardProps as ChakraCardProps,
} from "@chakra-ui/react";
import { ReactNode } from "react";

interface CardProps extends ChakraCardProps {
  children: ReactNode;
}

export default function Card({ children }: CardProps) {
  return (
    <ChakraCard py={6} px={5} maxW="350px" w="100%" maxH="230px">
      {children}
    </ChakraCard>
  );
}
