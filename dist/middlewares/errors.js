'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var notFound = exports.notFound = function notFound(req, res, next) {
  var err = new Error('404 page not found');
  err.status = 404;
  next(err);
};

var catchAsync = exports.catchAsync = function catchAsync(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch(function (err) {
      return next(err);
    });
  };
};

var catchErrors = exports.catchErrors = function catchErrors(err, req, res, next) {
  res.status(err.status || 500).json({
    message: err.message
  });
};