import { ValueType } from 'recharts/types/component/DefaultTooltipContent';

const moneyFormatter = (value: ValueType) => {
  const result = typeof value !== 'number' ? Number(value) : value;

  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(result);
};

const compactMoneyFormat = (value: ValueType) => {
  const result = typeof value !== 'number' ? Number(value) : value;

  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
    notation: 'compact'
  }).format(result);
}

const formatCurrencyToDB = (value: string): number => {
  let newVal = value.replace('R$', '');

  const v = newVal.split(',');

  v[0] = v[0].replace(new RegExp(`\\${'.'}`, 'g'), '');
  newVal = v.join('.');

  return Number(newVal);
};

export const NumberUtils = {
  moneyFormatter,
  compactMoneyFormat,
  formatCurrencyToDB
};