var express = require('express');
var knockknock= require('knock-knock-jokes');
var app = express();
var joke = knockknock();
app.use(express.static('public'));

app.get('/', function(req, res){
    res.send("Hello World! by express");
});

//can use as many routes as you need to do different things

app.get('/test', function(req, res){
    res.send("this is route two, using /test");
});

app.get('/test2', function(req,res){
    res.send("this is the final destination!");
});

app.get('/joke', function(req, res){
    res.send(joke);
});

app.get('/add', function(req,res) {
    var x = parseInt(req.query.x);
    var y = parseInt(req.query.y);
    res.send("X + Y =" + (x+y));
});

app.get('/calc', function(req,res){
    var x = parseInt(req.query.x);
    var y = parseInt(req.query.y);
    var op = req.query.operator;

    if (op === "add") {
        res.send("X + Y = " + (x+y));
    } else if (op === "sub") {
        res.send("X - Y = " + (x-y));
    } else if (op === "mult") {
        res.send("X * Y = " + (x*y));
    } else if (op === "div"){
        res.send("X / Y = " + (x/y));
    } else {
        res.send("huh??");
    }
});

app.get('/getform', function(req,res){
    var name = req.query.name;
    var quest = req.query.quest;
    res.send("HI " + name + ", i am sure you will " + quest);
})
app.listen(8080);