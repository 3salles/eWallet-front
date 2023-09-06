import { Button } from "@/components/atoms/Button";

interface TransactionDrawerFooterProps {
  onCancel: () => void;
}

export const TransactionDrawerFooter = ({
  onCancel,
}: TransactionDrawerFooterProps) => {
  return (
    <>
      <Button
        variant="outline"
        label="Cancelar"
        color="red.500"
        bg="color.500"
        w="full"
        onClick={onCancel}
      />
      <Button label="Salvar" w="full" />
    </>
  );
};
