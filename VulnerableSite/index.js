const sqlite3 = require("sqlite3").verbose();

// running the databse and allowing read and write access
const db = new sqlite3.Database('./users.db', sqlite3.OPEN_READWRITE, (err)=> {
    // error message
    if (err) return console.error(err.message);
    console.log("connection successful");
});




// closing the database and error check
db.close((err) => {
    if (err) return console.error(err.message);
})