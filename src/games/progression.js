import startGame from '../engineOfGame';
import getRandomNum from '../utils';

const generateProgression = (hidden, step, start, length) => {
  const iter = (accum, counter) => {
    if (counter === length) return accum;
    if (counter === hidden) return iter(`${accum} ..`, counter + 1);
    return iter(`${accum} ${counter * step + start}`, counter + 1);
  };
  return iter(start, 1);
};

const getTest = () => {
  const firstValue = getRandomNum();
  const hiddenElementPosition = getRandomNum(1, 9);
  const step = getRandomNum(1, 10);
  return {
    question: generateProgression(hiddenElementPosition, step, firstValue, 10),
    answer: `${hiddenElementPosition * step + firstValue}`,
  };
};
const description = 'What number is missing in this progression?';
const makeBrainGameProgression = () => startGame(getTest, description);

export default makeBrainGameProgression;
