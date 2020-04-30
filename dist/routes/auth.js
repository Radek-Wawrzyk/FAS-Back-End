'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _AuthController = require('../controllers/AuthController');

var _AuthController2 = _interopRequireDefault(_AuthController);

var _passport = require('passport');

var _passport2 = _interopRequireDefault(_passport);

var _auth = require('../middlewares/auth');

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var api = (0, _express.Router)();

  // POST /api/auth/register
  api.post('/register', _AuthController2.default.register);

  // POST /api/auth/login
  api.post('/login', _passport2.default.authenticate('local', { session: false }), _AuthController2.default.login);

  // POST /api/auth/test
  api.post('/test', _auth2.default, _AuthController2.default.test);

  return api;
};