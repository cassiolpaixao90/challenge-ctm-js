const figlet = require('figlet');
const chalk = require('chalk');
const clear = require('clear');
const conductor = require('./commands/conductor');

const ExitCommand = require('./commands/exitCommand');
const StartCommand = require('./commands/startCommand');

const { createInterface } = require('readline');

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

clear();

console.log(
  chalk.hex('#ec6aa0').bold(
    figlet.textSync('CLI TEST', {
      horizontalLayout: 'full'
    })
  )
);

console.log(chalk.green('<fileName> | exit'));
rl.prompt();

rl.on('line', value => {
  switch (value) {
    case 'exit':
      conductor.run(new ExitCommand());
      break;

    default:
      console.log('text', value);
      conductor.run(new StartCommand(value));
  }

  rl.prompt();
});
