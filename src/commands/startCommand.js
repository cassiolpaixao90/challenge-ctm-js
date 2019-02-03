const path = require("path");
const Streams = require("../utils/streams");
const fs = new Streams(require("fs"));

class StartCommand {
  constructor(value) {
    this.value = value;
  }

  get name() {
    return `input ${this.value}`;
  }

  execute() {
    const file = path.resolve(path.join("src", "storage", this.value));

    const result = (error, contents) => {
      if (error) {
        console.log("\x07");
        console.error(error);
        process.exit(0);
      }

      console.log("reading file...");
      console.log(contents);
      process.exit(0);
    };

    fs.readFile(file, "UTF-8", result);
  }
}

module.exports = StartCommand;
