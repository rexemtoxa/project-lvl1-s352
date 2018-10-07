import startGame from '../engineOfGame';
import getRandomNum from '../utils';

const isPrime = (num) => {
  if (num < 2) return false;
  if (num === 2) return true;
  const iter = (divisor) => {
    if (num % divisor === 0) return false;
    return divisor >= Math.sqrt(num) ? true : iter(divisor + 1);
  };
  return iter(2);
};

const getCorrectAnswer = num => (isPrime(num) ? 'yes' : 'no');
const getTest = () => {
  const num = getRandomNum();
  return {
    question: num,
    answer: getCorrectAnswer(num),
  };
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const makeBrainGamePrime = () => startGame(getTest, description);

export default makeBrainGamePrime;
