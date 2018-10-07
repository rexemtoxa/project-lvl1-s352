import startGame from '../engineOfGame';
import { getTest } from '../utils';

const isPrime = (num) => {
  if (num < 2) return false;
  const iter = (divisor) => {
    if (num % divisor === 0) return false;
    return divisor >= Math.sqrt(num) ? true : iter(divisor + 1);
  };
  return iter(2);
};

const getCorrectAnswer = num => (isPrime(num) ? 'yes' : 'no');
const generateTest = () => getTest(getCorrectAnswer);
const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default () => startGame(generateTest, description);
