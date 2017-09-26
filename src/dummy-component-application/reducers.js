import {
  LOAD_DUMMY_COMPONENT_APPLICATION,
  LOAD_DUMMY_COMPONENT_APPLICATION_SUCCEEDED,
  LOAD_DUMMY_COMPONENT_APPLICATION_FAILED,
} from './actions';

const dummyComponentApplicationReducers = (state = {
  isFailed: false,
  isLoading: true,
  dummyComponentApplication: undefined,
}, action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case LOAD_DUMMY_COMPONENT_APPLICATION:
      newState.isFailed = false;
      newState.isLoading = true;
      return newState;

    case LOAD_DUMMY_COMPONENT_APPLICATION_SUCCEEDED:
      newState.isFailed = false;
      newState.isLoading = false;
      newState.dummyComponentApplication = action.dummyComponentApplication;
      return newState;

    case LOAD_DUMMY_COMPONENT_APPLICATION_FAILED:
      newState.isFailed = true;
      newState.isLoading = false;
      return newState;

    default:
      return state;
  }
};

export default dummyComponentApplicationReducers;
