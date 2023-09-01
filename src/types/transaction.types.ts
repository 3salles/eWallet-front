import { ICategories } from ".";

export interface ITransaction {
  category: ICategories | null;
  description: string;
  institution: string | null;
  amount: number;
  date: string;
  uid: string | null;
}