import {
  Input as ChakraInput,
  Text,
  VStack,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
  label: string;
}

export const Input = ({ label, ...rest }: InputProps) => {
  return (
    <VStack spacing={1} alignItems="flex-start">
      <Text fontWeight={700} color={["gray.0", "gray.900"]}>
        {label}
      </Text>
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
