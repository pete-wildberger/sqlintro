//requires
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
//globals
var port = 9001;
//uses
app.use(express.static('public'));
app.use(bodyParser.urlencoded( {extended: true}));

app.listen(port, function(){
  console.log('server is up on', port);
});
//baseurl
app.get('/', function(req, res){
  console.log('base url hit');
  res.sendFile(path.resolve('views/index.html'));
});
