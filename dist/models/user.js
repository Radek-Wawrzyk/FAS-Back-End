'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

var _passportLocalMongoose = require('passport-local-mongoose');

var _passportLocalMongoose2 = _interopRequireDefault(_passportLocalMongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var User = _mongoose2.default.Schema({
  login: String,
  email: {
    type: String,
    unique: true,
    lowercase: true,
    trim: true
  }
});

User.plugin(_passportLocalMongoose2.default, { usernameField: 'login' });
exports.default = _mongoose2.default.model('User', User, 'users');