var express = require('express');
var app = express();

app.set('port', process.env.PORT || 3000);

app.get('/', function(request, response) {
  response.send('Hello world!');
});

app.listen(app.get('port'), function() {
  console.log('express server listening on port %d', app.get('port'));
});
