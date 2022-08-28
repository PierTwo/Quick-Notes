// Imports required modules
const fs = require("fs");
const util = require("util");

// Returns a promise of the file data that was read
const readFromFile = util.promisify(fs.readFile);

// Writes the note data to the JSON file
const writeToFile = (file, content) => {
  fs.writeFile(file, JSON.stringify(content), (err) => {
    err ? console.error(err) : console.info("Successfully added a new note");
  });
};

// Reads the JSON data then pushes the new note to it, then writes the new JSON to the JSON file
const readAndAppend = (file, content) => {
  readFromFile(file).then((data) => {
    const parsedData = JSON.parse(data);
    parsedData.push(content);
    writeToFile(file, parsedData);
  });
};

module.exports = { readFromFile, readAndAppend };
