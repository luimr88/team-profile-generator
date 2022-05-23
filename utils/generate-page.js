const fs = require('fs');
const pageBuilder = require('../src/generateHtml.js')

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./dist/index.html', pageBuilder(fileContent), err => {
        if (err) {
          reject(err);
          return;
        }
        resolve({
          ok: true,
          message: 'Your team profile has been created!'
        });
      });
    });
  };
  module.exports = { writeFile };