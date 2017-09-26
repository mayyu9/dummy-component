import React from 'react';
import { shallowWithIntl, loadTranslation } from 'enzyme-react-intl';
import DummyComponentApplicationView from '../../src/dummy-component-application/components/DummyComponentApplicationView';

loadTranslation('../translations/en-US.json');

it('should render a DummyComponentApplicationView with no data', () => {
  const dummyComponentApplicationView = shallowWithIntl(<DummyComponentApplicationView />);
  expect(dummyComponentApplicationView.first().shallow()).toMatchSnapshot();
});

it('should render a DummyComponentApplicationView that has failed', () => {
  const dummyComponentApplicationView = shallowWithIntl(<DummyComponentApplicationView isFailed />);
  expect(dummyComponentApplicationView.first().shallow()).toMatchSnapshot();
});

it('should render a DummyComponentApplicationView view that is loading', () => {
  const dummyComponentApplicationView = shallowWithIntl(<DummyComponentApplicationView />);
  expect(dummyComponentApplicationView.first().shallow()).toMatchSnapshot();
});

it('should render a DummyComponentApplicationView that has succeeded with a valid DummyComponentEngine', () => {
  const dummyComponentApplicationView = shallowWithIntl(<DummyComponentApplicationView text="DummyComponentApplication" />);
  expect(dummyComponentApplicationView.first().shallow()).toMatchSnapshot();
});
