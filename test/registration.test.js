import ReactOnRails from 'react-on-rails';
import '../src/dummy-component-application/registration';

it('should register DummyComponentApplicationApplication', () => {
  expect(ReactOnRails.getComponent('DummyComponentApplicationApplication')).not.toBeUndefined();
});
