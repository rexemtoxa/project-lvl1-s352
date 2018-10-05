import startGame from '../engineOfGame';
import { getRandomNum, GetBiggestDividor } from '../functionAndData';

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
