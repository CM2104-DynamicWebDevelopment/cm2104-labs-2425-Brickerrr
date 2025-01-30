var express = require('express');
var knockknock= require('knock-knock-jokes');
var app = express();
var joke = knockknock();

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
    var x = req.query.x;
    var y = req.query.y;
    res.send("X + Y =" + (x+y));
});

app.listen(8080);