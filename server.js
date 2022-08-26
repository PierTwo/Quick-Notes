// Imports required modules
const express = require("express");
const path = require("path");

// Sets PORT to bind to the environment port variable used by the Heroku server or to a local server port 0f 3001
const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static("public"));

// GET Route for homepage
app.get("/", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/index.html"))
);

// Get Route for notes page
app.get("/notes", (req, res) =>
  res.sendFile(path.join(__dirname, "/public/notes.html"))
);

// Tells the app to listen to any connections on the port set by the PORT variable
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT} 🚀`)
);
