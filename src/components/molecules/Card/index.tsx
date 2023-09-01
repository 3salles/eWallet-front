import {
  Card as ChakraCard,
  CardProps as ChakraCardProps,
} from "@chakra-ui/react";
import { ReactNode } from "react";

interface CardProps extends ChakraCardProps {
  children: ReactNode;
}

export default function Card({ children, ...rest }: CardProps) {
  return (
    <ChakraCard
      py={6}
      px={5}
      maxW={["100%", "350px", "400px"]}
      w="100%"
      maxH="230px"
      {...rest}
    >
      {children}
    </ChakraCard>
  );
}
