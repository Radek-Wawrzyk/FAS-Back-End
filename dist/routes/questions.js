'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _errors = require('../middlewares/errors');

var _questionController = require('../controllers/questionController');

var _questionController2 = _interopRequireDefault(_questionController);

var _auth = require('../middlewares/auth');

var _auth2 = _interopRequireDefault(_auth);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var api = (0, _express.Router)();

  // POST /api/questions
  api.post('/', (0, _errors.catchAsync)(_questionController2.default.sendQuestion));

  // GET /api/questions GUARDED
  api.get('/', [_auth2.default, (0, _errors.catchAsync)(_questionController2.default.getAll)]);

  // GET /api/questions/:id GUARDED
  api.get('/:id', [_auth2.default, (0, _errors.catchAsync)(_questionController2.default.getOne)]);

  // PUT /api/questions/:id GUARDED
  api.put('/:id', [_auth2.default, (0, _errors.catchAsync)(_questionController2.default.saveQuestion)]);

  return api;
};