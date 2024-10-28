var express = require('express');
var app = express();
app.use(express.static('public'));

app.get('/', function(req, res){
    res.send('<h2>Hello home page</h2>');
});
app.get('/route', function(req, res) {
    res.send('Hello Router, <img src="/ex.png">')
});
app.get('/login', function(req, res){
    res.send('<h1>Login please</h1>');
});
app.listen(3001, function(){
    console.log('Conneted 3001 port!');
});