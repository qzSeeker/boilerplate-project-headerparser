const express = require("express");
const app = express();
const cors = require("cors");

require('dotenv').config();

app.use(cors({ optionsSuccessStatus: 200 }));

app.use(express.static('public'));

app.get('/', function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});

// your first API endpoint...
app.get('/api/whoami', function (req, res) {
  try {
    const ipaddress = req.ip;
    const language = req.headers["accept-language"];
    const software = req.headers["user-agent"];
  
    res.json({
      ipaddress: ipaddress,
      language: language,
      software: software,
    });
  } catch (error) {
    console.log("Error occurred: ", err);
    res.status(500),json({error: "Internal Server Error"});
  }
});

// listen for requests :)
var listener = app.listen(process.env.PORT || 3001, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
