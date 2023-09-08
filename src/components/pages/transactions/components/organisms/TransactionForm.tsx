import { Input } from "@/components/atoms/Input";
import { Select } from "@/components/atoms/Select";
import { ButtonGroup, FormControl, IconButton, VStack } from "@chakra-ui/react";
import { categoryOptions } from "../atoms/CategoryOptions";
import useTransactionContext from "@/hooks/useTransactionContext";
import { ChangeEvent, FormEvent, useState } from "react";
import defaultTransaction from "@/context/transaction/defaultTransaction";
import { ICategories, ITransaction } from "@/types";
import { ImBin2 } from "react-icons/im";
import { Button } from "@/components/atoms/Button";
import { DateUtils } from "@/utils/date.utils";
import { NumberUtils } from "@/utils/number.utils";
import { TransactionDrawerFooter } from "../molecules/TransactionDrawerFooter";

export const TransactionForm = () => {
  const {
    toggleTransactionDrawer,
    transactionDrawer,
    deleteTransaction,
    editTransaction,
    createTransaction,
  } = useTransactionContext();

  const { transaction } = transactionDrawer;

  const isEditionMode = transaction !== null;
  const todayDate = new Date().toISOString();

  const defaultFormValue = transaction
    ? { ...transaction, date: DateUtils.formatFormDate(transaction.date) }
    : { ...defaultTransaction, date: DateUtils.formatFormDate(todayDate) };

  const [formValue, setFormValue] = useState(defaultFormValue);
  const [isFormDirty, setIsFormDirty] = useState(false);
  const [errors, setErrors] = useState({
    category: false,
    date: false,
    amount: false,
    description: false,
  });

  const isFormInvalid = Object.values(errors).includes(true);

  const handleDateChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = new Date(event.target.value);
    const today = new Date();
    if (value > today) {
      onChangeForm({ ...formValue, date: event.target.value });
      setErrors({ ...errors, date: true });

      return;
    }
    setErrors({ ...errors, date: false });
    onChangeForm({ ...formValue, date: event.target.value });
  };

  const onChangeForm = (value: ITransaction) => {
    setFormValue({ ...formValue, ...value });
  };
  const handleCloseDrawer = () =>
    toggleTransactionDrawer({
      ...transactionDrawer,
      visible: false,
      transaction: null,
    });

  const handleDeleteTransaction = () => {
    deleteTransaction(transaction?.uid ?? "");
    handleCloseDrawer();
  };

  const handleSubmit = (event: FormEvent<HTMLDivElement>) => {
    event.preventDefault();

    if (isEditionMode) {
      editTransaction(formValue);
    }

    createTransaction(formValue);
    handleCloseDrawer();
  };

  return (
    <FormControl
      as="form"
      h="100%"
      display="flex"
      flexDir="column"
      justifyContent="space-between"
      onSubmit={handleSubmit}
    >
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
            id="description"
            maxW={340}
            label="Nome"
            h="48px"
            type="text"
            placeholder="Nome da transação"
            value={formValue?.description}
            onChange={(event) =>
              onChangeForm({ ...formValue, description: event.target.value })
            }
            isInvalid={errors.description}
            helperText="Este campo é obrigatório"
            onBlur={(event) => {
              if (event.currentTarget.value === "") {
                setErrors({ ...errors, description: true });
                return;
              }

              setErrors({ ...errors, description: false });
              setIsFormDirty(true);
            }}
          />
          <Input
            id="institution"
            maxW={340}
            label="Instituição"
            type="text"
            placeholder="Nome da instituição"
            h="48px"
            value={formValue?.institution ?? ""}
            onChange={(event) =>
              onChangeForm({ ...formValue, institution: event.target.value })
            }
            onBlur={(event) => {
              if (event.currentTarget.value !== "") {
                setIsFormDirty(true);
              }
            }}
          />
          <Input
            id="date"
            label="Data"
            value={formValue.date}
            onChange={handleDateChange}
            maxW={340}
            type="date"
            h="48px"
            isInvalid={errors.date}
            helperText="Data escolhida maior que a atual"
          />
          <Input
            id="amount"
            label="Valor"
            maxW={340}
            type="text"
            defaultValue={formValue.amount}
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              const value = NumberUtils.formatCurrencyToDB(event.target.value);
              onChangeForm({
                ...formValue,
                amount: value,
              });
            }}
            placeholder="R$ 0,00"
            h="48px"
            isInvalid={errors.amount}
            helperText="Este campo é obrigatório"
            onBlur={(event) => {
              if (event.currentTarget.value === "") {
                setErrors({ ...errors, amount: true });
                return;
              }

              setErrors({ ...errors, amount: false });
              setIsFormDirty(true);
            }}
          />
          <Select
            id="category"
            options={categoryOptions}
            label="Categoria"
            value={formValue.category as ICategories}
            onChange={(value) =>
              onChangeForm({
                ...formValue,
                category: value.target.value as ICategories,
              })
            }
            isInvalid={errors.category}
            helperText="Este campo é obrigatório"
            onBlur={(event) => {
              if (event.currentTarget.value === "") {
                setErrors({ ...errors, category: true });
                return;
              }

              setErrors({ ...errors, category: false });
              setIsFormDirty(true);
            }}
          />
        </VStack>
      </VStack>
      <TransactionDrawerFooter
        onCancel={handleCloseDrawer}
        disableSaveButton={isFormInvalid || !isFormDirty}
      />
    </FormControl>
  );
};
