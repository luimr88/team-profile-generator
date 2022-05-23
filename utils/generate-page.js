const fs = require('fs');
const generatePage = require('../src/generateHtml.js')

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
      fs.writeFile('./dist/index.html', generatePage(fileContent), err => {
        if (err) {
          reject(err);
          return;
        }
        resolve({
          ok: true,
          message: 'Team profile has been generated'
        });
      });
    });
  };
  module.exports = { writeFile };