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

export type ITransactionDrawer = {
  visible: boolean;
  type: 'edit' | 'create';
  transaction: ITransaction | null;
};

export interface ITransactionContext {
  transactions: ITransaction[];
  selectedTransaction: ITransaction;
  transactionDrawer: ITransactionDrawer;
  updateSelectedTransaction: (uid: string | null) => void;
  toggleTransactionDrawer: (drawer: ITransactionDrawer) => void;
  createTransaction: (newTransaction: Omit<ITransaction, 'uid'>) => void;
  editTransaction: (newTransaction: ITransaction) => void;
  deleteTransaction: (uid: string | null) => void;
}