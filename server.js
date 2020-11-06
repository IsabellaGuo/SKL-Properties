const express = require('express');
const path = require('path');
const server = express();
const dataFile = require("./public/data.json");
const bodyParser = require('body-parser');


const port = 3001;
server.use(express.static('public'))
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: true }));

server.get("/api/data", (req,res) => {
  res.sendFile(path.join(__dirname, './public', 'data.json'));
})


server.listen(port, () => console.log(`server running on port ${port}`));