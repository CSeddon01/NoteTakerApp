//calling dependencies. intstalled by using: npm i express
const express = require("express");
const app = express();
const fs = require("fs");
const path = require("path");
//app used to delete notes by id
const uniqueId = require("uniqid");
//Built in Middleware that is used
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

//Routes used to access database 

app.get("/api/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "./db/db.json"));
});

app.post("/api/notes", (req, res) => {
  const newNote = req.body;
  const notes = JSON.parse(fs.readFileSync("./db/db.json"));
  newNote.id = uniqueId();
  notes.push(newNote);
  fs.writeFileSync("./db/db.json", JSON.stringify(notes));
  res.json(notes);
});
//delete note by id
app.delete("/api/notes/:id", (req, res) => {
  const noteId = req.params.id;
  let noteList = JSON.parse(fs.readFileSync("./db/db.json"));
  noteList = noteList.filter((x) => x.id !== noteId);
  fs.writeFileSync("./db/db.json", JSON.stringify(noteList));
  res.json(noteList);
});

//routes for accessing front end public information
app.get("/notes", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/notes.html"));
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/public/index.html"));
});

//starts the local server on port 3001
app.listen(process.env.PORT || 3001, () => {
  console.log("Server Running in Port 3001");
});
