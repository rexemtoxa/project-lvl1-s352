import startGame from '../engineOfGame';
import getRandomNum from '../utils';

const isEven = num => (num % 2) === 0;

const getTest = () => {
  const question = getRandomNum();
  const answer = isEven(question) ? 'yes' : 'no';
  return {
    question,
    answer,
  };
};

const description = 'Answer "yes" if number even otherwise answer "no".';

export default () => startGame(getTest, description);
