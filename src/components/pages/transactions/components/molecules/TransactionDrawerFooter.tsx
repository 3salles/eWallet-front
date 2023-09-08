import { Button } from "@/components/atoms/Button";
import { HStack } from "@chakra-ui/react";

interface TransactionDrawerFooterProps {
  onCancel: () => void;
}

export const TransactionDrawerFooter = ({
  onCancel,
}: TransactionDrawerFooterProps) => {
  return (
    <HStack bottom={0} w="full">
      <Button
        variant="outline"
        label="Cancelar"
        color="red.500"
        bg="color.500"
        w="full"
        onClick={onCancel}
      />
      <Button label="Salvar" w="full" type="submit" />
    </HStack>
  );
};
