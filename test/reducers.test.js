import dummyComponentApplicationReducers from '../src/dummy-component-application/reducers';
import {
  LOAD_DUMMY_COMPONENT_APPLICATION,
  LOAD_DUMMY_COMPONENT_APPLICATION_SUCCEEDED,
  LOAD_DUMMY_COMPONENT_APPLICATION_FAILED,
} from '../src/dummy-component-application/actions';

describe('dummyComponentApplication reducers', () => {
  it('should return the given state when action type is not recognized', () => {
    const initialState = { state: 'initial' };

    const result = dummyComponentApplicationReducers(initialState, { type: 'TEST_NOT_SUPPORTED_ACTION' });

    expect(result).toBe(initialState);
  });

  it('should return the default state when the initial state is undefined', () => {
    const result = dummyComponentApplicationReducers(undefined, { type: 'TEST_NOT_SUPPORTED_ACTION' });

    expect(result.dummyComponentApplication).toBeUndefined();
  });

  it('should return isLoading after a load action', () => {
    const result = dummyComponentApplicationReducers(undefined, { type: LOAD_DUMMY_COMPONENT_APPLICATION });

    expect(result).toEqual({
      isLoading: true,
      isFailed: false,
      dummyComponentApplication: undefined,
    });
  });

  it('should return isLoading and isFailed as false after a load action succeeds with a populated DummyComponentApplication', () => {
    const startingState = {
      isLoading: true,
      isFailed: false,
      dummyComponentApplication: undefined,
    };
    const result = dummyComponentApplicationReducers(startingState, {
      type: LOAD_DUMMY_COMPONENT_APPLICATION_SUCCEEDED,
      dummyComponentApplication: 'DummyComponentApplication',
    });

    expect(result).toEqual({
      isLoading: false,
      isFailed: false,
      dummyComponentApplication: 'DummyComponentApplication',
    });
  });

  it('should return isLoading and isFailed as false after a load action succeeds with a nonpopulated DummyComponentApplication', () => {
    const startingState = {
      isLoading: true,
      isFailed: false,
      dummyComponentApplication: undefined,
    };
    const result = dummyComponentApplicationReducers(startingState, {
      type: LOAD_DUMMY_COMPONENT_APPLICATION_SUCCEEDED,
      dummyComponentApplication: null,
    });

    expect(result).toEqual({
      isLoading: false,
      isFailed: false,
      dummyComponentApplication: null,
    });
  });

  it('should return isLoading as false and isFailed as true after a load action fails', () => {
    const startingState = {
      isLoading: true,
      isFailed: false,
      dummyComponentApplication: undefined,
    };
    const result = dummyComponentApplicationReducers(startingState, {
      type: LOAD_DUMMY_COMPONENT_APPLICATION_FAILED,
    });

    expect(result).toEqual({
      isLoading: false,
      isFailed: true,
      dummyComponentApplication: undefined,
    });
  });
});
