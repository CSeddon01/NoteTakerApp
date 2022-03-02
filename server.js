
//calling required modules 
//frameworks
const express = require('express');
const bodyParser = require('body-parser');

//call express and bodyParser
let app = express();
app.use(bodyParser.urlencoded({
    extended: true,
}));

//Setting up port for local server
app.listen(5000, function()
{console.log("NoteTakerApp server is running at port 5000...")
});