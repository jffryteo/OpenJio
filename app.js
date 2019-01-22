//
var express = require('express');
var app = express();
var createEventController = require('./controllers/createEventController');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
var routes = require('./routes/index');



// Create connection
var db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'password',
    database : 'ions',
    port: '3306',
    multiplestatements: true
});

// Connect
db.connect((err) => {
    if(!err){
        console.log('MySql Connected...');
    }
    else
    console.log('MySql has failed...' +JSON.stringify(err, undefined,2));
});
global.db = db;


// set up template engine
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views'); // set express to look in this folder to render our view
// set up static files
app.use('/images', express.static('images'));
app.use(fileUpload()); // configure fileupload
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json()); // parse form data client

// fire controllers
//createEventController(app);

//Set up all routes here
routes(app);


app.listen(4000, ()=>console.log('Express Server is running at port No 4000'));

//get users
app.get('/users/:id',(req,res)=>{
  db.query('SELECT * FROM users WHERE User_ID = ?',[req.params.id], (err,rows,fields)=>{
    if(!err){
      //console.log(rows);
      res.send(rows)
    }
    else {
      console.log(err);
    }
  })
});

//delete user
app.delete('/users/:id',(req,res)=>{
  db.query('DELETE FROM users WHERE User_ID = ?',[req.params.id], (err,rows,fields)=>{
    if(!err){
      //console.log(rows);
      res.send('Deleted successfully');
    }
    else {
      console.log(err);
    }
  })
});
