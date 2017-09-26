'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _axios = require('axios');

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var dummyComponentApplicationServiceFactory = function dummyComponentApplicationServiceFactory() {
  return {
    getDummyComponentApplication: function getDummyComponentApplication(patientId) {
      return _axios2.default.get('/patients/' + patientId + '/dummy-component-application', {
        headers: {
          Accept: 'application/json'
        }
      }).then(function (response) {
        return response.data.dummyComponentApplication;
      });
    }
  };
};

exports.default = dummyComponentApplicationServiceFactory();