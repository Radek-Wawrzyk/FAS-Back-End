'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Item = _mongoose2.default.Schema({
  _id: Number,
  answerText: String,
  choiceText: String,
  nextLevelQues: Number,
  parentId: Number,
  childrens: Array
});

exports.default = _mongoose2.default.model('Item', Item, 'items');