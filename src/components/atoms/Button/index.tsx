import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from "@chakra-ui/react";
import { MutableRefObject } from "react";

interface ButtonProps extends ChakraButtonProps {
  label: string;
  ref?: MutableRefObject<HTMLButtonElement | null>;
}

export const Button = ({ label, ref, ...rest }: ButtonProps) => {
  return (
    <ChakraButton ref={ref} colorScheme="brand" px={8} py={2} {...rest}>
      {label}
    </ChakraButton>
  );
};
