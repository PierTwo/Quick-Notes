// Imports required modules
const notes = require("express").Router();
const { readFromFile, readAndAppend } = require("../helpers/fsUtil");
const { v4: uuidv4 } = require("uuid");

// Variable for JSON file path
const file = "./db/db.json";

// Route for getting the notes by reading the JSON file
notes.get("/", (req, res) => {
  readFromFile(file).then((data) => res.json(JSON.parse(data)));
});

// Route for posting the notes to the JSON file
notes.post("/", (req, res) => {
  const { title, text } = req.body;

  if (req.body) {
    const newNote = {
      title,
      text,
      id: uuidv4(),
    };
    readAndAppend(file, newNote);
    res.json("Note has been added successfully");
  } else {
    res.error("Failed to add new note");
  }
});

// Exports our modularized routes
module.exports = notes;
