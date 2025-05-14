const fs = require("fs");

const writeJson = (filepath, obj) => {
  fs.writeFileSync(filepath, JSON.stringify(obj));
};

const ReadJson = (filepath) => {
  const content = fs.readFileSync(filepath);
  return JSON.parse(content.toString()); 
};

module.exports = {
  writeJson,
  ReadJson,
};
