import {
  Input as ChakraInput,
  VStack,
  InputProps as ChakraInputProps,
  FormLabel,
  Text,
} from "@chakra-ui/react";

interface InputProps extends ChakraInputProps {
  label: string;
  helperText?: string;
}

export const Input = ({
  label,
  helperText,
  isInvalid,
  ...rest
}: InputProps) => {
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
        isInvalid={isInvalid}
        errorBorderColor="red.500"
        {...rest}
      />
      {isInvalid && (
        <Text color="red.500" fontSize="xs" mt={1}>
          {helperText}
        </Text>
      )}
    </VStack>
  );
};
