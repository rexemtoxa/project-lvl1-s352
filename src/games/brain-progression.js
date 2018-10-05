import startGame from '../engineOfGame';
import { getRandomNum } from '../functionAndData';

const makeBrainGameProgression = () => {
  const maxLength = 10;
  const makeTest = () => {
    const generateList = (value, step, acc = []) => {
      if (acc.length === maxLength) return acc;
      const newList = acc.concat([value]);
      return generateList(value + step, step, newList);
    };

    const list = generateList(getRandomNum(), getRandomNum());
    const question = list.slice();
    question.splice(getRandomNum(0, maxLength), 1, '..');
    const getRightAnswer = (list1, list2) => list1.filter(el => !list2.has(el))[0];

    const test = {
      question: question.join(','),
      answer: getRightAnswer(list, new Set(question)),
    };

    return test;
  };
  const description = 'What number is missing in this progression?';
  return startGame(makeTest, description);
};
export default makeBrainGameProgression;
