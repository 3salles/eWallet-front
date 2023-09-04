import { ICategories } from "@/types";

const splitSentence = (text: string) => {
  const sentence = text.split(' ');

  const firstWord = sentence[0];
  const restOfSentence = sentence.slice(1).join(' ');

  return {
    firstWord,
    restOfSentence,
  };
};

const translateCategories = (value: ICategories) => {
  const categories = {
    income: 'Entrada',
    entertainment: 'Entreterimento',
    housing: 'Casa',
    food: 'Comida',
    transportation: 'Transporte',
    shopping: 'Compras',
    others: 'Outros',
    education: 'Educação',
  };

  return categories[value];
};

export const textUtils = {
  splitSentence,
  translateCategories
};