'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.loadDummyComponentApplication = loadDummyComponentApplication;
var LOAD_DUMMY_COMPONENT_APPLICATION = exports.LOAD_DUMMY_COMPONENT_APPLICATION = 'LOAD_DUMMY_COMPONENT_APPLICATION';
var LOAD_DUMMY_COMPONENT_APPLICATION_SUCCEEDED = exports.LOAD_DUMMY_COMPONENT_APPLICATION_SUCCEEDED = 'LOAD_DUMMY_COMPONENT_APPLICATION_SUCCEEDED';
var LOAD_DUMMY_COMPONENT_APPLICATION_FAILED = exports.LOAD_DUMMY_COMPONENT_APPLICATION_FAILED = 'LOAD_DUMMY_COMPONENT_APPLICATION_FAILED';

function loadDummyComponentApplication(service, patientId) {
  return {
    type: LOAD_DUMMY_COMPONENT_APPLICATION,
    data: {
      service: service,
      patientId: patientId
    }
  };
}