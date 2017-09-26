import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

import dummyComponentApplicationService from '../src/dummy-component-application/service';

describe('dummyComponentApplicationService', () => {
  it('should return the appropriate value on success', () => {
    const mockRequest = new MockAdapter(axios);
    mockRequest.onGet('/patients/1/dummy-component-application', {
      headers: {
        Accept: 'application/json',
      },
    }).reply(200, {
      dummyComponentApplication: 'DummyComponentApplication!',
    });

    return dummyComponentApplicationService.getDummyComponentApplication(1).then(dummyComponentApplication => expect(dummyComponentApplication).toEqual('DummyComponentApplication!'));
  });
});
