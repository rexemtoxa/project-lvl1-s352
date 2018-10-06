import startGame from '../engineOfGame';
import getRandomNum from '../utils';

const isPrime = (num, divisor = 2) => {
  if (num === 1) return false;
  if (num === 2) return true;
  if (num % divisor === 0) return false;
  return divisor >= Math.sqrt(num) ? true : isPrime(num, divisor + 1);
};

const getCorrectAnswer = num => (isPrime(num) ? 'yes' : 'no');
const makeTest = () => {
  const num = getRandomNum();
  const test = {
    question: num,
    answer: getCorrectAnswer(num),
  };
  return test;
};
const makeBrainGamePrime = () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  return startGame(makeTest, description);
};
export default makeBrainGamePrime;
