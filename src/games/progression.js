import startGame from '../engineOfGame';
import getRandomNum from '../utils';

const maxLength = 10;
const generateProgression = (start, step, acc = []) => {
  if (acc.length === maxLength) return acc;
  const newList = acc.concat([start]);
  return generateProgression(start + step, step, newList);
};

const makeTest = () => {
  const progression = generateProgression(getRandomNum(1, 10), getRandomNum(1, 10));
  const hiddenElement = getRandomNum(0, progression.length);
  const answer = progression[hiddenElement];
  progression[hiddenElement] = '..';

  const test = {
    answer,
    question: progression.join(','),
  };
  return test;
};

const makeBrainGameProgression = () => {
  const description = 'What number is missing in this progression?';
  return startGame(makeTest, description);
};
export default makeBrainGameProgression;
