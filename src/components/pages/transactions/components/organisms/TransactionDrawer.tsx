import { Drawer } from "@/components/atoms/Drawer";
import { TransactionDrawerFooter } from "../molecules/TransactionDrawerFooter";
import { TransactionForm } from "./TransactionForm";
import useTransactionContext from "@/hooks/useTransactionContext";

export const TransactionDrawer = () => {
  const { transactionDrawer, toggleTransactionDrawer } =
    useTransactionContext();

  const { visible, transaction } = transactionDrawer;

  const handleCloseDrawer = () =>
    toggleTransactionDrawer({
      ...transactionDrawer,
      visible: false,
      transaction: null,
    });

  return (
    <Drawer
      isOpen={visible}
      onClose={handleCloseDrawer}
      // ref={null}
      content={<TransactionForm />}
      title={transaction !== null ? "Editar Transação" : "Nova Transação"}
      footer={<TransactionDrawerFooter onCancel={handleCloseDrawer} />}
    />
  );
};
