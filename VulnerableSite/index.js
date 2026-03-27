// path to HTML and CSS files
const path = require("path");

// loading express to handle HTTP / requests
const express = require('express');

// handles middleware to read user input
const bodyParser = require('body-parser');

// better detailed SQLite messages using verbose
const sqlite3 = require("sqlite3").verbose();

// path to db file
const db = new sqlite3.Database(path.join(__dirname, 'users.db'));

// creating my server
const weakSiteApp = express();

// allows app to use the user input by parsing it from HTML
// plaintext input
weakSiteApp.use(bodyParser.urlencoded({ extended: true }));

// usable javascript object
weakSiteApp.use(express.json());

// to service all files in directory
weakSiteApp.use(express.static(__dirname));

// creating a very basic users table
db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    Name TEXT,
    Password TEXT
  )
`);

// where user input is beinf take from
weakSiteApp.post('/formSubmission', (req, res) => {
    const Name = req.body.Name;
    const Password = req.body.Password;

    // made vulnerable query a constant
    const VulnerableSQL = `INSERT INTO users (Name, Password) VALUES ('${Name}', '${Password}')`;
    // db runs the vulnerable query and shoots error if there is one
    db.run(VulnerableSQL, (err) => {
        if (err) {
            console.log(err);
        }
    })
    // response message
    res.send("User Added");
});

// listening on port 3000 which the server will run on
weakSiteApp.listen(3000, () => {console.log("Server running on http://localhost:3000");});