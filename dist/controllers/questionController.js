'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _question = require('../models/question');

var _question2 = _interopRequireDefault(_question);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = {
  sendQuestion: function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
      var question;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return new _question2.default(req.body).save();

            case 2:
              question = _context.sent;
              return _context.abrupt('return', res.status(201).send({
                message: 'Success',
                question: question
              }));

            case 4:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function sendQuestion(_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }(),

  getAll: function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
      var questions;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _question2.default.find();

            case 2:
              questions = _context2.sent;
              return _context2.abrupt('return', res.status(200).send({
                data: questions
              }));

            case 4:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function getAll(_x4, _x5, _x6) {
      return _ref2.apply(this, arguments);
    };
  }(),

  getOne: function () {
    var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(req, res, next) {
      var question;
      return regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.next = 2;
              return _question2.default.findOne({ '_id': req.params.id });

            case 2:
              question = _context3.sent;
              return _context3.abrupt('return', res.status(200).send({
                question: question
              }));

            case 4:
            case 'end':
              return _context3.stop();
          }
        }
      }, _callee3, undefined);
    }));

    return function getOne(_x7, _x8, _x9) {
      return _ref3.apply(this, arguments);
    };
  }(),

  saveQuestion: function () {
    var _ref4 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee4(req, res, next) {
      var question;
      return regeneratorRuntime.wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _question2.default.findOne({ '_id': req.params.id });

            case 2:
              question = _context4.sent;


              // update object
              question.isAnswered = true;
              question.answerText = req.body.answerText;
              _context4.next = 7;
              return question.save();

            case 7:
              return _context4.abrupt('return', res.status(200).send({
                question: question
              }));

            case 8:
            case 'end':
              return _context4.stop();
          }
        }
      }, _callee4, undefined);
    }));

    return function saveQuestion(_x10, _x11, _x12) {
      return _ref4.apply(this, arguments);
    };
  }()
};