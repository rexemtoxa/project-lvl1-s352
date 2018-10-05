import startGame from '../engineOfGame';
import { getRandomNum } from '../functionAndData';

const makeBrainGameCalc = () => {
  const selectTest = () => {
    const num1 = getRandomNum(0, 10);
    const num2 = getRandomNum(0, 10);
    const amountOperations = 3;
    const selectedOperation = getRandomNum(1, amountOperations);
    let obj = {};
    switch (selectedOperation) {
      case 1:
        obj = {
          question: `${num1} + ${num2}`,
          answer: num1 + num2,
        };
        break;
      case 2:
        obj = {
          question: `${num1} - ${num2}`,
          answer: num1 - num2,
        };
        break;
      default:
        obj = {
          question: `${num1} * ${num2}`,
          answer: num1 * num2,
        };
        break;
    }
    return obj;
  };
  const rules = 'What is the result of the expression?';
  return startGame(selectTest, rules);
};
export default makeBrainGameCalc;
