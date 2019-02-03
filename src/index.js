const figlet = require("figlet");
const chalk = require("chalk");
const clear = require("clear");
const conductor = require("./commands/conductor");

const ExitCommand = require("./commands/exitCommand");
const StartCommand = require("./commands/startCommand");

const { createInterface } = require("readline");

const rl = createInterface({
  input: process.stdin,
  output: process.stdout
});

clear();

console.log(
  chalk.hex("#ec6aa0").bold(
    figlet.textSync("Challenge TW =)", {
      horizontalLayout: "full"
    })
  )
);

console.log(chalk.green("input <fileName> | exit"));
rl.prompt();

rl.on("line", input => {
  const [commandText, ...remaining] = input.split(" ");
  const [...fileName] = remaining;
  const text = fileName.join(" ");

  switch (commandText) {
    case "exit":
      conductor.run(new ExitCommand());
      break;

    case "input":
      conductor.run(new StartCommand(text));
      break;

    default:
      console.log(`${commandText} command not found!`);
  }

  rl.prompt();
});
