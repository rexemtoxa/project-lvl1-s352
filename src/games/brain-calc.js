import startGame from '../engineOfGame';

const makeBrainGameCalc = () => {
  const selectTest = () => {
    const getRandomNum = (edge = 10) => Math.floor(Math.random() * edge);
    const num1 = getRandomNum();
    const num2 = getRandomNum();
    const sum = {
      question: `${num1} + ${num2}`,
      answer: num1 + num2,
    };
    const diff = {
      question: `${num1} - ${num2}`,
      answer: num1 - num2,
    };
    const mult = {
      question: `${num1} * ${num2}`,
      answer: num1 * num2,
    };
    const listOperations = [
      sum,
      diff,
      mult,
    ];
    return listOperations[getRandomNum(listOperations.length)];
  };
  const rules = `What is the result of the expression?
  `;
  return startGame(selectTest, rules);
};
export default makeBrainGameCalc;
