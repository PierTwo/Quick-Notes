// Imports required modules
const notes = require("express").Router();
const fs = require("fs");

// Route for getting the notes by reading the JSON file
notes.get("/", (req, res) => {
  fs.readFile("./db/db.json", (err, data) => {
    return err ? console.error(error) : res.json(JSON.parse(data));
  });
});

// Exports our modularized route
module.exports = notes;
