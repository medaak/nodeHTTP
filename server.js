// let http = require('http');
// let port = 3000;
//
// let server = http.createServer((request, response) => {
//     response.end("Salut à toi, oh NodeJS !");
// });
//
// server.listen(port, (err) => {
//     if (err)
//         return console.log('something bad happened', err);
//     console.log(`server is listening on ${port}`);
// });

// dependencies
var express = require('express');
var app = express();
let port = 3000;

// Set views emplacement
app.set('views', './views');

// Set views engine used
app.set('view engine', 'jade');

// start the server
app.listen(port, function(){
  console.log('Application started');
});

// home route
app.get('/',function(request,response){
  response.render('index', { title: "Homepage",heymessage: 'Hey stranger', welcomemessage: 'Welcome to my homepage !!',aboutmessage:"Do you want to learn more about me ? "});
});

// about route
app.get('/about',function(request,response){
  response.render('aboutMe', { title: 'About me', message: 'Not your business'});

});
