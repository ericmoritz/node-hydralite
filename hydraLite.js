'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});
// -*- mode: javascript -*-

var _Namespace$Class$Property = require('jsonld-dsl');

var ns = _Namespace$Class$Property.Namespace(_Namespace$Class$Property.Class('Operation'), _Namespace$Class$Property.Class('CreateResourceOperation'), _Namespace$Class$Property.Class('ReplaceResourceOperation'), _Namespace$Class$Property.Class('DeleteResourceOperation'), _Namespace$Class$Property.Property('method'), _Namespace$Class$Property.Property('expects'), _Namespace$Class$Property.Property('returns'), _Namespace$Class$Property.Property('statusCodes'), _Namespace$Class$Property.Property('operation'));

exports.ns = ns;
Object.defineProperty(exports, 'Resource', {
  enumerable: true,
  get: function get() {
    return _Namespace$Class$Property.Resource;
  }
});
Object.defineProperty(exports, 'URI', {
  enumerable: true,
  get: function get() {
    return _Namespace$Class$Property.URI;
  }
});
Object.defineProperty(exports, 'type', {
  enumerable: true,
  get: function get() {
    return _Namespace$Class$Property.type;
  }
});
var PUT = operationFactory('PUT');
exports.PUT = PUT;
var POST = operationFactory('PUT');
exports.POST = POST;
var DELETE = operationFactory('PUT');

exports.DELETE = DELETE;
/* Internal */
var operationFactory = function operationFactory(method) {
  return function () {
    for (var _len = arguments.length, properties = Array(_len), _key = 0; _key < _len; _key++) {
      properties[_key] = arguments[_key];
    }

    return ns.operation(ns.Operation.apply(ns, [ns.method(method)].concat(properties)));
  };
};
