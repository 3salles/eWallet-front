import { Button } from "@/components/atoms/Button";

export const TransactionDrawerFooter = () => {
  return (
    <>
      <Button
        variant="outline"
        label="Cancelar"
        color="red.500"
        bg="color.500"
        w="full"
      />
      <Button label="Salvar" w="full" />
    </>
  );
};
