import startGame from '../engineOfGame';
import { getRandomNum } from '../utils';


const getTest = () => {
  const num1 = getRandomNum(0, 10);
  const num2 = getRandomNum(0, 10);
  const amountOperations = 3;
  const selectedOperation = getRandomNum(1, amountOperations);
  switch (selectedOperation) {
    case 1:
      return {
        question: `${num1} - ${num2}`,
        answer: `${num1 - num2}`,
      };
    case 2:
      return {
        question: `${num1} + ${num2}`,
        answer: `${num1 + num2}`,
      };
    default:
      return {
        question: `${num1} * ${num2}`,
        answer: `${num1 * num2}`,
      };
  }
};

const description = 'What is the result of the expression?';

export default () => startGame(getTest, description);
