'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _item = require('../models/item');

var _item2 = _interopRequireDefault(_item);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

exports.default = {
  findAll: function () {
    var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(req, res, next) {
      var response;
      return regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _item2.default.find();

            case 2:
              response = _context.sent;


              response.forEach(function (first) {
                first.childrens = [];
                response.forEach(function (second) {
                  first._id === second.parentId ? first.childrens.push(second) : false;
                });
              });

              return _context.abrupt('return', res.status(200).send({
                items: response
              }));

            case 5:
            case 'end':
              return _context.stop();
          }
        }
      }, _callee, undefined);
    }));

    return function findAll(_x, _x2, _x3) {
      return _ref.apply(this, arguments);
    };
  }(),

  getOne: function () {
    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(req, res, next) {
      var item, itemChildrens;
      return regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _item2.default.findOne({ '_id': req.params.id });

            case 2:
              item = _context2.sent;
              _context2.next = 5;
              return _item2.default.find({ 'parentId': item._id });

            case 5:
              itemChildrens = _context2.sent;

              item.childrens = [].concat(_toConsumableArray(itemChildrens));

              return _context2.abrupt('return', res.status(200).send({
                item: item
              }));

            case 8:
            case 'end':
              return _context2.stop();
          }
        }
      }, _callee2, undefined);
    }));

    return function getOne(_x4, _x5, _x6) {
      return _ref2.apply(this, arguments);
    };
  }()
};