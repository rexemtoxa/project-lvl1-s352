import readlineSync from 'readline-sync';
import { getRandomNum, getCorrectAncwer, maxCorrectAnswer } from '../functionAndData';

const startGame = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".\n');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  for (let round = 1; round <= maxCorrectAnswer; round += 1) {
    const question = getRandomNum();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const isTrue = userAnswer === getCorrectAncwer(question);
    if (isTrue) console.log('Correct');
    else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${getCorrectAncwer(question)}.`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default startGame;
