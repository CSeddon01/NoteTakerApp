
//calling dependencies
const express = require('express')

const app = express()
app.use(express.json())

app.use(express.urlencoded({extended: true}));

app.use(express.static("public"));

//required routes
require("./routes/apiRoute")(app);
require("./routes/htmRoute")(app);


//starts the local server
app.listen(process.env.PORT || 3001, () => {
    console.log('Server Running in Port 3001')
  })
  
  
