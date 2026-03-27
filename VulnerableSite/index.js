// better detailed SQLite messages using verbose
const sqlite3 = require("sqlite3").verbose();

// path to db file
const db = new sqlite3.Database('./users.db');

// creating a very basic users table
db.run(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    Name TEXT,
    password TEXT
  )
`);

// loading express to handle HTTP / requests
const express = require('express');

// handles middleware to read user input
const bodyParser = require('body-parser');

// creating my server
const weakSiteApp = express();