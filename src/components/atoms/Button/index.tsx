import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
} from "@chakra-ui/react";

interface ButtonProps extends ChakraButtonProps {
  label: string;
}

export const Button = ({ label, ...rest }: ButtonProps) => {
  return (
    <ChakraButton colorScheme="brand" px={8} py={2} {...rest}>
      {label}
    </ChakraButton>
  );
};
