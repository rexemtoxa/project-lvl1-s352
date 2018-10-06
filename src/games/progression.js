import startGame from '../engineOfGame';
import getRandomNum from '../utils';

const maxLength = 10;
const generateProgression = (accum, counter, hidden, step, start) => {
  if (counter === maxLength) return accum;
  if (counter === hidden) {
    return generateProgression(`${accum} ..`, counter + 1, hidden, step, start);
  }
  return generateProgression(`${accum} ${counter * step + start}`, counter + 1, hidden, step, start);
};

const makeTest = () => {
  const firstValue = getRandomNum();
  const hiddenValue = getRandomNum(1, maxLength);
  const step = getRandomNum(1, 10);
  const test = {
    question: generateProgression(firstValue, 1, hiddenValue, step, firstValue),
    answer: hiddenValue * step + firstValue,
  };
  return test;
};

const makeBrainGameProgression = () => {
  const description = 'What number is missing in this progression?';
  return startGame(makeTest, description);
};
export default makeBrainGameProgression;
