const path = require('path');
const Streams = require('../utils/streams');
const fs = new Streams(require('fs'));

class StartCommand {
  constructor(value) {
    this.value = value;
  }

  get name() {
    return this.value;
  }

  execute() {
    const file = path.resolve(path.join('src', 'storage', `${this.value}.txt`));
    console.log('file', file);
    const result = (error, contents) => {
      if (error) {
        throw new Error(`Can only read .txt files.`);
      }
      console.log('reading file...');
      console.log('contents', contents);
      process.exit(0);
    };
    fs.readFile(file, 'UTF-8', result);
  }
}

module.exports = StartCommand;
