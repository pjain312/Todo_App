

// connection the database
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/todo_db');
const db = mongoose.connection;

// error handling
db.on('error', console.error.bind(console,'error connecting to db'));

// when no error, db runs successfully
db.once('open', function(){
    console.log("successfully connected to the database");
});