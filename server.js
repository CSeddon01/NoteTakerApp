
//calling required modules 
//frameworks
const express = require('express');
const fs = require('fs');
const path = require('path');

// routes
const apiRoutes = require('./Routes/apiRoutes/index.js');
const htmlRoutes = require('./Routes/htmlRoutes/index.js')
//call express 
const app = express();

//setting local port
const port = 3001;

//parse post incoming string or array
app.use(express.urlencoded({ extended: true }));

//parse post incoming JSON
app.use(express.json());

//Routes request handlers
app.use(`/api`, apiRoutes);
app.use(`/`, htmlRoutes);
app.use(express.static(`public`));

// app.get("/", (req, res) => {
//     res.send("Hello World!");
// })
//Setting up port for local server
app.listen(port, () => {
console.log("NoteTakerApp server is running on port ${port}");
});

