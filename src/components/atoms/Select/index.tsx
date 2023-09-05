import {
  Select as ChakraSelect,
  FormLabel,
  VStack,
  SelectProps as ChakraSelectProps,
} from "@chakra-ui/react";

type Option = {
  label: string;
  value: string;
};

interface SelectProps extends ChakraSelectProps {
  label: string;
  options: Option[];
}

export const Select = ({ label, options }: SelectProps) => {
  return (
    <VStack w="full" justifyContent="center" alignItems="flex-start">
      <FormLabel fontWeight={700} m={0}>
        {label}
      </FormLabel>
      <ChakraSelect placeholder="Escolha uma categoria" w={350} h="48px">
        {options.map((option) => (
          <option key={option.label} value={option.value}>
            {option.label}
          </option>
        ))}
      </ChakraSelect>
    </VStack>
  );
};
