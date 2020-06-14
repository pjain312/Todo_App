
// including express
const express = require('express');
const path = require('path');

// setting port
const port = 8000;

// db addition
const db = require('./config/mongoose');

// db can be accessed by this const "Todo"

const Todo = require('./models/todo');


const app = express();

// setting up view engine
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// middleware
app.use(express.urlencoded());

// to access static files
app.use(express.static('assets'));


// rendering hpmepage

app.get('/', function(req,res){
    Todo.find({},function(err,todo){
        if(err){
            console.log('Error in fetching task');
            return;
        }
        return res.render('home',{
            title : "ToDoApp",
            todo : todo
        });
    });
    
});

// creation of task
app.post('/create-task',function(req,res){

    Todo.create({
        itemname: req.body.itemname,
        type: req.body.type,
        date: req.body.date
    } , function(err,newTask){
            if(err){console.log('error in creating a new task');
            return;
        }
        console.log('*******',newTask);
        return res.redirect('back');
        });
});

// deletion of task
app.get('/delete-task/',function(req,res){
    let id = req.query.id;


    Todo.findByIdAndDelete(id,function(err){
        if(err){
            console.log('err in deleting a task from DB');
            return;
        }
        return res.redirect('back');
    });
});

// running u the server

app.listen(port, function(err)
{
    if(err)
    {
        console.log('error in running the server', err);
    }

    console.log('yup, my express server is running on port',port);
});