const express = require('express');
const path = require('path');
const morgan = require('morgan');
const ejs = require('ejs');
const bodyParser = require('body-parser');
const app = express();

app.use(morgan('dev'));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes'));

app.set('port', process.env.PORT || 3100);

var server = app.listen(app.get('port'), function() {
  console.log('Express server listening on port ' + server.address().port);
});

module.exports = app;