const fs = require('fs');

const readJsonFileSync = (filepath, encoding) => {
  if (typeof encoding == 'undefined') {
    encoding = 'utf8';
  }
  const file = fs.readFileSync(filepath, encoding);
  return JSON.parse(file);
};

const getJsonFromFile = (file) => {
  const filepath = __dirname + '/' + file;
  return readJsonFileSync(filepath);
};

const saveJsonContent = (filename, jsonContent) => {
  const filepath = __dirname + '/' + filename;
  fs.writeFileSync(filepath, JSON.stringify(jsonContent, null, 4));
};

module.exports.readJsonFileSync = readJsonFileSync;
module.exports.getJsonFromFile = getJsonFromFile;
module.exports.saveJsonContent = saveJsonContent;