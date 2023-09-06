import { Input } from "@/components/atoms/Input";
import { Select } from "@/components/atoms/Select";
import { ButtonGroup, FormControl, IconButton, VStack } from "@chakra-ui/react";
import { categoryOptions } from "../atoms/CategoryOptions";
import useTransactionContext from "@/hooks/useTransactionContext";
import { ChangeEvent, useEffect, useState } from "react";
import defaultTransaction from "@/context/transaction/defaultTransaction";
import { ICategories, ITransaction } from "@/types";
import { NumberUtils } from "@/utils/number.utils";
import { ImBin2 } from "react-icons/im";
import { Button } from "@/components/atoms/Button";
import { DateUtils } from "@/utils/date.utils";

export const TransactionForm = () => {
  const { toggleTransactionDrawer, transactionDrawer, deleteTransaction } =
    useTransactionContext();

  const { transaction } = transactionDrawer;

  const isEditionMode = transaction !== null;
  const todayDate = new Date().toISOString();

  const defaultFormValue = transaction
    ? { ...transaction, date: DateUtils.formatFormDate(transaction.date) }
    : { ...defaultTransaction, date: DateUtils.formatFormDate(todayDate) };

  const [formValue, setFormValue] = useState(defaultFormValue);
  const [errors, setErrors] = useState({
    category: false,
    date: false,
    amount: false,
  });

  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = new Date(event.target.value);
    const today = new Date();
    if (value > today) {
      setErrors({ ...errors, date: true });

      return;
    }
    setErrors({ ...errors, date: false });
    onChangeForm({ ...formValue, date: event.target.value });
  };

  const onChangeForm = (value: ITransaction) => {
    setFormValue({ ...formValue, ...value });
  };

  const handleDeleteTransaction = () => {
    deleteTransaction(transaction?.uid ?? "");
    toggleTransactionDrawer({
      ...transactionDrawer,
      visible: false,
      transaction: null,
    });
  };

  return (
    <FormControl as="form">
      <VStack alignItems="flex-end">
        {isEditionMode && (
          <ButtonGroup
            size="sm"
            isAttached
            variant="outline"
            onClick={handleDeleteTransaction}
          >
            <Button label="Excluir" color="red.500" borderColor="red.500" />
            <IconButton
              aria-label="Excluir transação"
              icon={<ImBin2 />}
              color="red.500"
              borderColor="red.500"
            />
          </ButtonGroup>
        )}
        <VStack alignItems="flex-start">
          <Input
            maxW={350}
            label="Nome"
            h="48px"
            type="text"
            placeholder="Nome da transação"
            isRequired
            value={formValue?.description}
            onChange={(event) =>
              onChangeForm({ ...formValue, description: event.target.value })
            }
          />
          <Input
            maxW={350}
            label="Instituição"
            type="text"
            placeholder="Nome da instituição"
            h="48px"
            value={formValue?.institution ?? ""}
            onChange={(event) =>
              onChangeForm({ ...formValue, institution: event.target.value })
            }
          />
          <Input
            label="Data"
            value={formValue.date}
            onChange={handleDateChange}
            maxW={350}
            type="date"
            h="48px"
          />
          <Input
            label="Valor"
            maxW={350}
            type="text"
            placeholder="R$ 0,00"
            h="48px"
            value={formValue?.amount}
            onChange={(event) => {
              const value = NumberUtils.formatCurrencyToDB(event.target.value);
              onChangeForm({
                ...formValue,
                amount: value,
              });
            }}
          />
          <Select
            options={categoryOptions}
            label="Categoria"
            value={formValue.category ?? "Escolha uma categoria"}
            onChange={(value) =>
              onChangeForm({
                ...formValue,
                category: value.target.value as ICategories,
              })
            }
          />
        </VStack>
      </VStack>
    </FormControl>
  );
};
