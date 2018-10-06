import startGame from '../engineOfGame';
import getRandomNum from '../utils';

const StartIter = (num, divisor) => {
  if (num % divisor === 0) return false;
  return divisor >= Math.sqrt(num) ? true : StartIter(num, divisor + 1);
};

const isPrime = (num) => {
  if (num < 2) return false;
  if (num === 2) return true;
  return StartIter(num, 2);
};

const getCorrectAnswer = num => (isPrime(num) ? 'yes' : 'no');
const getTest = () => {
  const num = getRandomNum();
  return {
    question: num,
    answer: getCorrectAnswer(num),
  };
};
const makeBrainGamePrime = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  return startGame(getTest, description);
};
export default makeBrainGamePrime;
