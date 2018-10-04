import readlineSync from 'readline-sync';

const startGame = (testGenerator, rules) => {
  console.log('Welcome to the Brain Games!');
  console.log(rules);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
  const maxCurrectAnswer = 3;
  const printCongratulations = () => console.log(`Congratulations, ${userName}!`);

  const startTest = (assessment = '', amountRightAnswer = 0) => {
    if (amountRightAnswer !== maxCurrectAnswer) {
      console.log(assessment);
      const test = testGenerator();
      console.log(`Question: ${test.question}`);
      const userAnswer = readlineSync.question('Your answer: ');
      return (userAnswer === `${test.answer}` ? startTest('Correct!', amountRightAnswer + 1) : console.log(`${userAnswer} is wrong answer ;(. Correct answer was ${test.answer}. Let's try again, ${userName}!`));
    }
    return printCongratulations();
  };
  return startTest();
};
export default startGame;
