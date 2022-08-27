// Imports required module
const express = require("express");

// Imports the modular route
const notesRouter = require("./notes.js");

// Shorthand for calling express
const app = express();

// Router middleware to use our modular route for /notes
app.use("/notes", notesRouter);

// Exports our router middleware
module.exports = app;
