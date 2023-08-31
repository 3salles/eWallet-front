export type ITransactionType = 'income' | 'outcome';

export interface IFinancialInfo  {
  label: string;
  value: string;
  color: string;
  type: ITransactionType;
}

export interface ITransactionResume {
  amount: number;
  income_amount: number;
  outcome_amount: number;
}