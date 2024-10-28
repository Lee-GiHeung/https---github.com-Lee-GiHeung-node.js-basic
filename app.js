var express = require('express');
var app = express();
app.use(express.static('public'));

app.get('/', function(req, res){
    res.send('<h2>Hello home page</h2>');
});
app.get('/dynamic', function(req, res) {
    var lis = '';
    for(var i=0; i<5; i++) {
        lis = lis + '<li>coding</li>';
    }
    var time = Date();
    var output = `
    <!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title></title>
        </head>
        <body>
            Hello, Dynamic!
            <ul>
                ${lis}
            </ul> 
            ${time}
        </body>
    </html>`;
    res.send(output);
});
app.get('/route', function(req, res) {
    res.send('Hello Router, <img src="/route/ex.png">')
});
app.get('/login', function(req, res){
    res.send('<h1>Login please</h1>');
});
app.listen(3001, function(){
    console.log('Conneted 3001 port!');
});