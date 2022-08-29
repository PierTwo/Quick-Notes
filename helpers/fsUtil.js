// Imports required modules
const fs = require("fs");
const util = require("util");

// Returns a promise of the file data that was read
const readFromFile = util.promisify(fs.readFile);

// Writes to the file with the content passed to the function
const writeToFile = (file, content) => {
  // Write to the file path and use the content having been stringified that was passed to the function
  fs.writeFile(file, JSON.stringify(content), (err) => {
    err ? console.error(err) : console.info(`Wrote to ${file}`);
  });
};

// Reads the file and then adds the new content before writing to the file
const readAndAppend = (file, content) => {
  // Calls readFromFile with the file path that was passed to the function
  readFromFile(file)
    // Parses the data that was returned
    .then((data) => JSON.parse(data))
    .then((parsedData) => {
      // Push the content that was passed to the function to the end of the parsed data
      parsedData.push(content);
      // Calls writeToFile with the file path passed to the function and the parsed data that had the new content pushed to it
      writeToFile(file, parsedData);
    });
};

// Reads the data from the file and filters out the matching ID passed to the function before writing the new data
const deleteById = (file, id) => {
  // Calls readFromFile with the file path that was passed to the function
  readFromFile(file)
    // Parses the data that was returned
    .then((data) => JSON.parse(data))
    .then((parsedData) => {
      // Creates a variable that is assigned the parsed data having filtered out the data with the matching ID
      const result = parsedData.filter((noteData) => noteData.id !== id);
      // Calls writeToFile with the file path that was passed to the function and the result of the filtered data
      writeToFile(file, result);
    });
};

// Export the helper functions
module.exports = { readFromFile, readAndAppend, deleteById };
