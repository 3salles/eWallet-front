import { CategoryIcon } from "@/components/molecules/CategoryIcon";
import { HStack } from "@chakra-ui/react";
import { TransactionLabel } from "../atoms/TransactionLabel";
import { ITransaction } from "@/types";

type TransactionDescriptionProps = Pick<
  ITransaction,
  "description" | "institution" | "category"
>;

export const TransactionDescription = ({
  description,
  institution,
  category,
}: TransactionDescriptionProps) => {
  return (
    <HStack spacing={4}>
      <CategoryIcon category={category} />
      <HStack>
        <TransactionLabel description={description} institution={institution} />
      </HStack>
    </HStack>
  );
};
