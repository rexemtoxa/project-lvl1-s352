import startGame from '../engineOfGame';
import getRandomNum from '../utils';

const getBiggestDividor = (num1, num2) => {
  if (num1 === 0) return num2;
  return getBiggestDividor(num2 % num1, num1);
};
const getTest = () => {
  const num1 = getRandomNum(0, 100);
  const num2 = getRandomNum(1, 10);
  return {
    question: `${num1} ${num2}`,
    answer: `${getBiggestDividor(num1, num2)}`,
  };
};

const description = 'Find the greatest common divisor of given numbers.';

export default () => startGame(getTest, description);
