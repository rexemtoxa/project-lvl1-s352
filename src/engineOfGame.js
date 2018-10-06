import readlineSync from 'readline-sync';

const maxCorrectAnswer = 3;
const startGame = (testGenerator, description) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${description}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!\n`);

  for (let round = 1; round <= maxCorrectAnswer; round += 1) {
    const test = testGenerator();
    console.log(`Question: ${test.question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const isTrue = userAnswer === `${test.answer}`;
    if (isTrue) {
      console.log('Correct');
    }
    else {
      console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${test.answer}.`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default startGame;
