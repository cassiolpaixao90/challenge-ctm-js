const readline = require('readline');

class Streams {
  constructor(fs_subject) {
    this.fs = fs_subject;
  }

  readFile(path, format, callback) {
    try {
      if (!path.match(/.txt$|.TXT$/)) {
        throw new Error(`Can only read .txt files.`);
      }
      let lines = [];
      let readStream = this.fs.createReadStream(path, format);
      let reader = readline.createInterface({ input: readStream });

      reader.on('line', line => {
        if (line.trim()) lines.push(line);
      });

      reader.on('close', () => {
        return callback(null, lines);
      });
    } catch (e) {
      return callback(e);
    }
  }
}

module.exports = Streams;
