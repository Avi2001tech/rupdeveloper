const http = require("http");

const hostname = "127.0.0.1";
const port = 8000;

const express = require('express');
const path = require('path');

const app = express();


// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/home.html'));
});

app.get('/aboutus', function(req, res) {
    res.sendFile(path.join(__dirname, '/aboutus.html'));
  });
  
app.get('/contact', function(req, res) {
    res.sendFile(path.join(__dirname, '/contact.html'));
  });

app.get('/signup', function(req, res) {
    res.sendFile(path.join(__dirname, '/signup.html'));
  });

app.post('/signup', function(req, res) {
    res.send("Successfully signed up")
  });

app.get('/signin', function(req, res) {
    res.sendFile(path.join(__dirname, '/signin.html'));
  });

app.post('/signin', function(req, res) {
    res.sendFile(path.join(__dirname, '/home.html'));
  });

app.listen(port);
console.log('Server started at http://localhost:' + port);