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

export const NumberUtils = {
  moneyFormatter,
  compactMoneyFormat
};