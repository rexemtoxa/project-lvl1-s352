import startGame from '../engineOfGame';
import getRandomNum from '../utils';

const isEven = num => (num % 2) === 0;
const getCorrectAnswer = num => (isEven(num) ? 'yes' : 'no');
const getTest = () => {
  const num = getRandomNum();
  return {
    question: num,
    answer: getCorrectAnswer(num),
  };
};

const description = 'Answer "yes" if number even otherwise answer "no".';
const makeEvenGame = () => startGame(getTest, description);

export default makeEvenGame;
