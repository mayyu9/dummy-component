import React from 'react';
import DummyComponentApplicationApplication from '../../src/dummy-component-application/components/DummyComponentApplicationApplication';

it('should render a DummyComponentApplicationApplication with a placeholder', () => {
  const testDummyService = {
    getDummyComponentApplication: () => (
      new Promise((resolve) => {
        setTimeout(() => { resolve(); }, 1);
      })
    ),
  };

  const testView = shallow(<DummyComponentApplicationApplication
    locale="en-US"
    patientId={100}
    service={testDummyService}
    translationsLoadingHeader="DummyComponentEngine!!!!"
  />);
  expect(testView.first().shallow()).toMatchSnapshot();
});
