const chalk = require('chalk');
const quotes = require('./data');
const { getRandomIntInclusive: randomNameFunc } = require('./helpers/random');


function showQuote(quotes) {
  const randomNumber = randomNameFunc(0, quotes.length - 1);
  return `${quotes[randomNumber].quote} by ${quotes[randomNumber].name}`;
}

console.log(chalk.blue(showQuote(quotes)));