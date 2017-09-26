'use strict';

require('regenerator-runtime/runtime');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _DummyComponentApplicationApplication = require('../dummy-component-application/components/DummyComponentApplicationApplication');

var _DummyComponentApplicationApplication2 = _interopRequireDefault(_DummyComponentApplicationApplication);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable import/no-extraneous-dependencies */
var testDummyService = {
  getDummyComponentApplication: function getDummyComponentApplication() {
    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve('DummyComponentApplication Rules');
      }, 2500);
    });
  }
};

_reactDom2.default.render(_react2.default.createElement(_DummyComponentApplicationApplication2.default, {
  patientId: 100,
  locale: 'en-US',
  service: testDummyService,
  translationsLoadingHeader: 'DummyComponentApplication'
}), document.getElementById('root'));