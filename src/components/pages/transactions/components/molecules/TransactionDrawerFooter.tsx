import { Button } from "@/components/atoms/Button";
import { HStack } from "@chakra-ui/react";

interface TransactionDrawerFooterProps {
  disableSaveButton: boolean;
  onCancel: () => void;
}

export const TransactionDrawerFooter = ({
  onCancel,
  disableSaveButton,
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
      <Button
        label="Salvar"
        w="full"
        type="submit"
        isDisabled={disableSaveButton}
      />
    </HStack>
  );
};
