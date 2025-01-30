var express = require('express');
var app = express();

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

app.listen(8080);