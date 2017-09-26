/* eslint-disable import/no-extraneous-dependencies */

import React from 'react';
import { shallowWithStore } from 'enzyme-redux';
import { createMockStore } from 'redux-test-utils';
import DummyComponentApplicationContainer from '../../src/dummy-component-application/components/DummyComponentApplicationContainer';
import { LOAD_DUMMY_COMPONENT_APPLICATION } from '../../src/dummy-component-application/actions';

it('should render a DummyComponentApplicationContainer with a populated DummyComponentApplication', () => {
  const testContainer = shallowWithStore(
    <DummyComponentApplicationContainer />,
    createMockStore({
      dummyComponentApplicationState: {
        dummyComponentApplication: 'DummyComponentApplication',
      },
    }),
  );
  expect(testContainer.first().shallow()).toMatchSnapshot();
});

it('should render a DummyComponentApplicationContainer with a nonpopulated DummyComponentApplication', () => {
  const testContainer = shallowWithStore(
    <DummyComponentApplicationContainer />,
    createMockStore({
      dummyComponentApplicationState: {},
    }),
  );
  expect(testContainer.first().shallow()).toMatchSnapshot();
});

it('should render a DummyComponentApplicationContainer with DummyComponentEngine loading', () => {
  const testContainer = shallowWithStore(
    <DummyComponentApplicationContainer />,
    createMockStore({
      dummyComponentApplicationState: {},
    }),
  );
  expect(testContainer.first().shallow()).toMatchSnapshot();
});

it('should render a DummyComponentApplication container with a DummyComponentEngine failed', () => {
  const testContainer = shallowWithStore(
    <DummyComponentApplicationContainer />,
    createMockStore({
      dummyComponentApplicationState: {
        isFailed: true,
      },
    }),
  );
  expect(testContainer.first().shallow()).toMatchSnapshot();
});

it('should call the dispatch method', () => {
  const testStore = createMockStore({
    dummyComponentApplicationState: {
    },
  });
  const testContainer = shallowWithStore(
    <DummyComponentApplicationContainer patientId={100} />,
    testStore,
  );

  testContainer.props().refreshDummyComponentApplication();
  expect(testStore.isActionTypeDispatched(LOAD_DUMMY_COMPONENT_APPLICATION)).toBe(true);
});
