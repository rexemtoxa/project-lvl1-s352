import startGame from '../engineOfGame';
import { getRandomNum } from '../utils';

const test = {};
const getTest = () => {
  const num1 = getRandomNum(0, 10);
  const num2 = getRandomNum(0, 10);
  const amountOperations = 3;
  const selectedOperation = getRandomNum(1, amountOperations);
  switch (selectedOperation) {
    case 1:
      test.question = `${num1} - ${num2}`;
      test.answer = `${num1 - num2}`;
      break;
    case 2:
      test.question = `${num1} * ${num2}`;
      test.answer = `${num1 * num2}`;
      break;
    default:
      test.question = `${num1} + ${num2}`;
      test.answer = `${num1 + num2}`;
      break;
  }
  return test;
};

const description = 'What is the result of the expression?';

export default () => startGame(getTest, description);
