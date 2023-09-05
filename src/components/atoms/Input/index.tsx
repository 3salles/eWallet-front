import {
  Input as ChakraInput,
  VStack,
  InputProps as ChakraInputProps,
  FormLabel,
} from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
  label: string;
}

export const Input = ({ label, ...rest }: InputProps) => {
  return (
    <VStack spacing={0} alignItems="flex-start">
      <FormLabel fontWeight={700} color={["gray.0", "gray.900"]}>
        {label}
      </FormLabel>
      <ChakraInput
        color={["gray.0", "gray.700"]}
        _placeholder={{ color: "inherit" }}
        colorScheme="gray"
        w={[300, 400]}
        {...rest}
      />
    </VStack>
  );
};
