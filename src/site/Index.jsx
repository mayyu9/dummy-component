/* eslint-disable import/no-extraneous-dependencies */
import 'regenerator-runtime/runtime';
import React from 'react';
import ReactDOM from 'react-dom';

import DummyComponentApplicationApplication from '../dummy-component-application/components/DummyComponentApplicationApplication';

const testDummyService = {
  getDummyComponentApplication: () => (
    new Promise((resolve) => {
      setTimeout(() => { resolve('DummyComponentApplication Rules'); }, 2500);
    })
  ),
};

ReactDOM.render(
  <DummyComponentApplicationApplication
    patientId={100}
    locale="en-US"
    service={testDummyService}
    translationsLoadingHeader="DummyComponentApplication"
  />, document.getElementById('root'));
