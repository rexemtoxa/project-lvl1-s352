import startGame from '../engineOfGame';
import { getRandomNum } from '../utils';

const GetBiggestDividor = (num1, num2) => {
  if (num1 === 0) return num2;
  return GetBiggestDividor(num2 % num1, num1);
};

const makeTest = () => {
  const num1 = getRandomNum(0, 100);
  const num2 = getRandomNum(1, 10);

  const test = {
    question: `${num1} ${num2}`,
    answer: GetBiggestDividor(num1, num2),
  };

  return test;
};

const makeBrainGameGcd = () => {
  const description = 'Find the greatest common divisor of given numbers.';
  return startGame(makeTest, description);
};
export default makeBrainGameGcd;