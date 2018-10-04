import readlineSync from 'readline-sync';

const startGame = () => {
  console.log('Welcome to the Brain Games!');
  console.log(`Answer "yes" if number even otherwise answer "no".
`);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!
  `);

  const getRandomNum = (edge = 100) => Math.floor(Math.random() * edge);
  const isEven = num => (num % 2) === 0;
  const getCorrectAncwer = num => (isEven(num) ? 'yes' : 'no');
  const maxCorrectAnswer = 3;
  let lastAnswer = true;

  const getIterAnswer = () => {
    const question = getRandomNum();
    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const isTrue = userAnswer === getCorrectAncwer(question);
    lastAnswer = isTrue;
    return isTrue ? 'Correct!' : `${userAnswer} is wrong answer ;(. Correct answer was ${getCorrectAncwer(question)}.`;
  };

  for (let round = 1; round <= maxCorrectAnswer; round += 1) {
    if (lastAnswer) console.log(getIterAnswer());
    else {
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};
export default startGame;
