var express = require('express');

  var app=express();
  app.use(express.static('public'));

  var server=app.listen('3000',connMessage);

  function connMessage(){
    console.log('connection established with server');
    }
