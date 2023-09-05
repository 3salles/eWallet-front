import { ITransaction } from '@/types';

const defaultTransaction: ITransaction = {
  category: null,
  date: '',
  amount: 0,
  description: '',
  institution: null,
  uid: null,
};

export default defaultTransaction;