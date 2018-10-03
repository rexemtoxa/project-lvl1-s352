import readlineSync from 'readline-sync';

const startGame = () => {
  console.log(`Welcome to the Brain Games!
Answer "yes" if number even otherwise answer "no".
`);

  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  const getRandomNum = (edge = 100) => Math.floor(Math.random() * edge);
  const isEven = num => !(num % 2);
  const rightAnswer = num => (isEven(num) ? 'yes' : 'no');
  const ask = num => console.log(`Question: ${num}`);

  const beginGame = (counter, message = 'Correct!') => {
    if (counter > 3) {
      return console.log(`Correct!
Congratulations, ${userName}!`);
    }
    console.log(message);
    const currentNum = getRandomNum();
    const right = rightAnswer(currentNum);
    ask(currentNum);
    const userAnswer = `${readlineSync.question('Your answer: ')}`;
    return (userAnswer === right ? beginGame(counter + 1) : console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${right}.`));
  };
  return beginGame(1, '');
};

export default startGame;
