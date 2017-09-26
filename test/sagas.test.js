import dummyComponentApplicationSagas, { fetchDummyComponentApplication } from '../src/dummy-component-application/sagas';

import {
  LOAD_DUMMY_COMPONENT_APPLICATION,
  LOAD_DUMMY_COMPONENT_APPLICATION_FAILED,
  LOAD_DUMMY_COMPONENT_APPLICATION_SUCCEEDED,
} from '../src/dummy-component-application/actions';

function testDummyService() {
  return 'test';
}

describe('dummyComponentApplication sagas', () => {
  it('should return the DummyComponentEngine given an action', () => {
    const action = {
      type: LOAD_DUMMY_COMPONENT_APPLICATION,
      data: {
        service: { getDummyComponentApplication: testDummyService },
        patientId: 100,
      },
    };

    const testLoad = fetchDummyComponentApplication(action);
    testLoad.next(action);

    const result = testLoad.next('test');
    expect(result.value.PUT.action).toEqual({ dummyComponentApplication: 'test', type: LOAD_DUMMY_COMPONENT_APPLICATION_SUCCEEDED });
  });

  it('should return failed given an invalid action', () => {
    const result = fetchDummyComponentApplication({}).next();
    expect(result.value.PUT.action).toEqual({ type: LOAD_DUMMY_COMPONENT_APPLICATION_FAILED });
  });

  it('should return latest saga', () => {
    const result = dummyComponentApplicationSagas[0]({}).next({});
    expect(result.value.FORK.args).toEqual([LOAD_DUMMY_COMPONENT_APPLICATION, fetchDummyComponentApplication]);
  });
});
