import {
  Select as ChakraSelect,
  FormLabel,
  VStack,
  SelectProps as ChakraSelectProps,
  Text,
} from "@chakra-ui/react";

type Option = {
  label: string;
  value: string;
};

interface SelectProps extends ChakraSelectProps {
  label: string;
  options: Option[];
  helperText: string;
}

export const Select = ({
  label,
  options,
  helperText,
  isInvalid,
  ...rest
}: SelectProps) => {
  return (
    <VStack w="full" justifyContent="center" alignItems="flex-start">
      <FormLabel fontWeight={700} m={0}>
        {label}
      </FormLabel>
      <ChakraSelect
        placeholder="Escolha uma categoria"
        errorBorderColor="red.500"
        w={340}
        h="48px"
        isInvalid={isInvalid}
        {...rest}
      >
        {options.map((option) => (
          <option key={option.label} value={option.value}>
            {option.label}
          </option>
        ))}
      </ChakraSelect>
      {isInvalid && (
        <Text color="red.500" fontSize="xs">
          {helperText}
        </Text>
      )}
    </VStack>
  );
};
