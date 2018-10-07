import startGame from '../engineOfGame';
import { getTest } from '../utils';

const isEven = num => (num % 2) === 0;
const getCorrectAnswer = num => (isEven(num) ? 'yes' : 'no');
const generateTest = () => getTest(getCorrectAnswer);
const description = 'Answer "yes" if number even otherwise answer "no".';

export default () => startGame(generateTest, description);
