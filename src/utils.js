export const getRandomNum = (
  min = 0,
  max = 100,
) => (Math.floor(Math.random() * (max - min + 1)) + min);

export const getTest = (getAnwer) => {
  const num = getRandomNum();
  return {
    question: num,
    answer: `${getAnwer(num)}`,
  };
};
