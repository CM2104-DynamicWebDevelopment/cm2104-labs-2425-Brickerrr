var express = require('express');
var app = express();
app.use(express.static('public'));

app.get('/getform', function(req,res) {
    var name = req.query.name;
    var quest = req.query.quest;
    res.send("Hi, " + name + " i am sure you will " + quest);
});

app.listen(8080);