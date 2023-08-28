const splitSentence = (text: string) => {
  const sentence = text.split(' ');

  const firstWord = sentence[0];
  const restOfSentence = sentence.slice(1).join(' ');

  return {
    firstWord,
    restOfSentence,
  };
};

export const textUtils = {
  splitSentence,
};