import startGame from '../engineOfGame';
import getRandomNum from '../utils';

const maxLength = 10;
const generateProgression = (hidden, step, start) => {
  const iter = (accum, counter) => {
    if (counter === maxLength) return accum;
    if (counter === hidden) {
      return iter(`${accum} ..`, counter + 1);
    }
    return iter(`${accum} ${counter * step + start}`, counter + 1);
  };
  return iter(start, 1);
};

const getTest = () => {
  const firstValue = getRandomNum();
  const hiddenValue = getRandomNum(1, maxLength - 1);
  const step = getRandomNum(1, 10);
  return {
    question: generateProgression(hiddenValue, step, firstValue),
    answer: hiddenValue * step + firstValue,
  };
};

const makeBrainGameProgression = () => {
  const description = 'What number is missing in this progression?';
  return startGame(getTest, description);
};
export default makeBrainGameProgression;
