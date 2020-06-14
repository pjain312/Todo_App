
// schema of the database
const mongoose = require('mongoose');
const contactSchema = new mongoose.Schema({
     itemname :{
        type:String,
        required:true
    },

    type:{
        type:String,
        required :true
    },
    date:{
        type:String,
        required:true
    }
});

// exporting the schema
const Todo = mongoose.model('Todo',contactSchema);
module.exports = Todo;