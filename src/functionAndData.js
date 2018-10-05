export const getRandomNum = (edge = 100) => Math.floor(Math.random() * edge);
export const isEven = num => (num % 2) === 0;
export const getCorrectAncwer = num => (isEven(num) ? 'yes' : 'no');
export const maxCorrectAnswer = 3;
