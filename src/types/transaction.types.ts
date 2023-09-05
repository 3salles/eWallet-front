import { ICategories } from ".";

export interface ITransaction {
  category: ICategories | null;
  description: string;
  institution: string | null;
  amount: number;
  date: string;
  uid: string | null;
}

export type ITransactionType = 'income' | 'outcome';

// export interface IFinancialInfo  {
//   label: string;
//   value: string;
//   color: string;
//   type: ITransactionType;
// }

export interface ITransactionResume {
  amount: number;
  income_amount: number;
  outcome_amount: number;
}

export interface ITransactionContext {
  transactions: ITransaction[];
}