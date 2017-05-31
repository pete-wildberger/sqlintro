//requires
var express = require('express');
var app = express();
var path = require('path');
var bodyParser = require('body-parser');
var pg = require('pg');

//globals
var port = 9001;
var config = {
  database: 'omegapicts',
  host: 'localhost',
  port: 5432,
  max: 12
};

var pool = new pg.Pool( config );

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

app.get('/images', function(req, res){
  console.log('images url hit');
  pool.connect(function(err, connection, done){
    if(err){
      console.log('error connecting to db');
      done();
      res.send('poop');
    }else{
      console.log('connect to db');
        var allImages = [];



        var resultSet = connection.query( 'SELECT * FROM pictable' );
        resultSet.on('row', function(row){
          allImages.push(row);
        });
        resultSet.on('end', function(){
          done();
          res.send(allImages);
        });
    }
  });
});

app.post('/images', function(req, res){
  res.send('hey');
});
