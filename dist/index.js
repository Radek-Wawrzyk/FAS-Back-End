'use strict';

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _cors = require('cors');

var _cors2 = _interopRequireDefault(_cors);

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _passport = require('./config/passport');

var _passport2 = _interopRequireDefault(_passport);

var _database = require('./config/database');

var _database2 = _interopRequireDefault(_database);

var _errors = require('./middlewares/errors');

require('regenerator-runtime/runtime.js');

var _items = require('./routes/items');

var _items2 = _interopRequireDefault(_items);

var _questions = require('./routes/questions');

var _questions2 = _interopRequireDefault(_questions);

var _auth = require('./routes/auth');

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config({ path: '.env' });

// Global imports
// Enviroment variables


// Routes


// DB config
_mongoose2.default.connect(_database2.default.mongoUrl, {
  useUnifiedTopology: true,
  useNewUrlParser: true
});

_mongoose2.default.Promise = global.Promise;
_mongoose2.default.connection.on('error', function (err) {
  console.log('Could not connect to the database. Exiting now...', err);
  process.exit();
});

// Passport config
(0, _passport2.default)();

var app = (0, _express2.default)();

app.use(_bodyParser2.default.json());
app.use((0, _cors2.default)());
app.use(_bodyParser2.default.urlencoded({ extended: false }));

// Routes
app.use('/api/items', (0, _items2.default)());
app.use('/api/questions', (0, _questions2.default)());
app.use('/api/auth', (0, _auth2.default)());

// Errors handling
app.use(_errors.notFound);
app.use(_errors.catchErrors);

app.listen(4000, function () {
  console.log('Server is up!');
});