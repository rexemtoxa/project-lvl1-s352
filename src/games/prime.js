import startGame from '../engineOfGame';
import getRandomNum from '../utils';

const isPrime = (num) => {
  if (num < 2) return false;
  const iter = (divisor) => {
    if (num % divisor === 0) return false;
    return divisor >= Math.sqrt(num) ? true : iter(divisor + 1);
  };
  return iter(2);
};

const getTest = () => {
  const question = getRandomNum();
  const answer = isPrime(question) ? 'yes' : 'no';
  return {
    question,
    answer,
  };
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => startGame(getTest, description);
