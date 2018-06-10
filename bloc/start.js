var http = require('http');
var express = require('express');
var app = express();

app.use(express.static(__dirname+"/dist"));

app.listen("80", function(){
    console.log('App (dev) is now running on port 8080!');
});

