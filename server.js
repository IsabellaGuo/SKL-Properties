const express = require('express');
const path = require('path');
const server = express();
const fs = require('fs');

const port = process.env.PORT || 3001;
server.use(express.static('public'));
server.use(express.json());

server.get("/api/data", (req,res) => {
  res.sendFile(path.join(__dirname, './public', 'data.json'));
})


server.post('/contact/submit', (req, res) => {
  const contactFormData = req.body
  fs.readFile(
    path.join(__dirname, './public', 'contacts.json'),
    (err, fileData) => {
      if (err) throw err;
      const json = JSON.parse(fileData);
      json.push(contactFormData);
      res.send(json);
      console.log(json);
      fs.writeFile(
        path.join(__dirname, './public', 'contacts.json'),
        JSON.stringify(json),
        (err, data) => {
          if (err) throw err;
          console.log('appended');
        }
      );
    }
  );
});

server.listen(port, () => console.log(`server running on port ${port}`));