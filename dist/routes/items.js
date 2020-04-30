'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = require('express');

var _errors = require('../middlewares/errors');

var _ItemController = require('../controllers/ItemController');

var _ItemController2 = _interopRequireDefault(_ItemController);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function () {
  var api = (0, _express.Router)();

  //GET /api/item
  api.get('/', (0, _errors.catchAsync)(_ItemController2.default.findAll));

  //GET /api/item/:id
  api.get('/:id', (0, _errors.catchAsync)(_ItemController2.default.getOne));

  return api;
};