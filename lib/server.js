'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
var port = process.env.PORT || 8888;

app.use(_bodyParser2.default.urlencoded({ extended: true }));

app.get('/', function (req, res, next) {
  res.send('API GATEWAY!');
});

app.use(function (err, req, res, next) {
  res.status(500).json({
    err: err.toString()
  });
});
app.listen(port, function (err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening on port ' + port);
});