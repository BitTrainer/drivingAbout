var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3000);

app.get('/customer',function(req, res) {
  res.type('text/json');
  res.status(200);
  res.send(JSON.stringify([{id:1,name:'Grant'}]));
});

app.use(function(req,res) {
  res.type('text/plain');
  res.status(404);
  res.send('404 - Not Found');
});


app.use(function(err,req,res, next) {
  res.type('text/plain');
  res.status(500);
  res.send('500 - Internal server error.');
});

app.listen(app.get('port'), function() {
  console.log('Driving about server started on port ' + app.get('port')
             + 'Press CTRL+C to stop.');
});
