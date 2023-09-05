import { Input } from "@/components/atoms/Input";
import { Select } from "@/components/atoms/Select";
import { FormControl, VStack } from "@chakra-ui/react";
import { categoryOptions } from "../atoms/CategoryOptions";

export const TransactionForm = () => {
  return (
    <FormControl>
      <VStack alignItems="flex-start">
        <Input
          maxW={350}
          label="Nome"
          h="48px"
          type="text"
          placeholder="Nome da transação"
          isRequired
        />
        <Input
          maxW={350}
          label="Instituição"
          type="text"
          placeholder="Nome da instituição"
          h="48px"
        />
        <Input label="Data" maxW={350} type="date" h="48px" />
        <Input
          label="Valor"
          maxW={350}
          type="text"
          placeholder="R$ 0,00"
          h="48px"
        />
        <Select options={categoryOptions} label="Categoria" />
      </VStack>
    </FormControl>
  );
};
