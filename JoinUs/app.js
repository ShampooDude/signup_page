var express = require('express'),
    faker   = require('faker'),
    mysql   = require('mysql'),
    bodyParser = require('body-parser'); // To extract information from req(a giant block of text) in the url
    
var app = express();
app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + "/public"));

var connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'shampoodude',
    database : 'join_us'
});


// ROUTING
app.get("/", function(req, res){
    // Find count of users in DB
    var q = "SELECT COUNT(*) AS count FROM users";
    connection.query(q, function(err, results){
        if(err) throw err;
        var count = results[0].count;
        res.render("home", {count: count});
    });
});

app.post("/register", function(req, res){
    var person = {
        email: req.body.email
    }
    
    // Another way
    // var q = "INSERT INTO users(email) VALUES (" + req.body.email + ")";
    // connection.query(q, function(err, result){
    //   if(err) throw err;
    //   console.log(result);
    // });
    connection.query("INSERT INTO users SET ?", person, function(err, result){
       if(err) throw err;
       console.log(result);
    });
});

app.get("/joke", function(req, res){
    var joke = "joke page";
    res.send(joke);
});

app.get("/random_num", function(req, res){
    var num = Math.floor(Math.random() * 10) + 1;
    res.send("Your lucky number is " + num);
});

app.listen(process.env.PORT, process.env.IP, function(){
   console.log('Server running!'); 
});