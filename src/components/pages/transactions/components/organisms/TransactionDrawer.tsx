import { Button } from "@/components/atoms/Button";
import { Drawer } from "@/components/atoms/Drawer";
import { useDisclosure } from "@chakra-ui/react";
import React from "react";
import { TransactionDrawerFooter } from "../molecules/TransactionDrawerFooter";
import { TransactionForm } from "./TransactionForm";

export const TransactionDrawer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef(null);

  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen} label="aBRIR" />
      <Drawer
        isOpen={isOpen}
        onClose={onClose}
        ref={btnRef}
        content={<TransactionForm />}
        title="Nova Transação"
        footer={<TransactionDrawerFooter />}
      />
    </>
  );
};
