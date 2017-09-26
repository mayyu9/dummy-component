import {
  LOAD_DUMMY_COMPONENT_APPLICATION,
  loadDummyComponentApplication,
} from '../src/dummy-component-application/actions';

function testDummyService() {
  return 'Test API';
}

describe('dummyComponentApplication actions', () => {
  it('should create an action to load the DummyComponentEngine', () => {
    expect(loadDummyComponentApplication(testDummyService, 100)).toEqual({
      type: LOAD_DUMMY_COMPONENT_APPLICATION,
      data: {
        service: testDummyService,
        patientId: 100,
      },
    });
  });
});
