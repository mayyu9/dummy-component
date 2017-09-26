import React from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

import { loadDummyComponentApplication } from '../actions';
import dummyComponentApplicationReducers from '../reducers';
import dummyComponentApplicationSagas from '../sagas';
import dummyComponentApplicationService from '../service';

import DummyComponentApplicationView from './DummyComponentApplicationView';

const propTypes = {
  dummyComponentApplication: PropTypes.string,
  refreshDummyComponentApplication: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  isFailed: PropTypes.bool,
};

class DummyComponentApplicationContainer extends React.Component {
  componentDidMount() {
    document.addEventListener('orionReactComponentRefresh', this.props.refreshDummyComponentApplication);
    this.props.refreshDummyComponentApplication();
  }

  componentWillUnmount() {
    document.removeEventListener('orionReactComponentRefresh', this.props.refreshDummyComponentApplication);
  }

  render() {
    const { isFailed, isLoading, dummyComponentApplication } = this.props;
    return <DummyComponentApplicationView isFailed={isFailed} isLoading={isLoading} text={dummyComponentApplication} />;
  }
}

DummyComponentApplicationContainer.propTypes = propTypes;

const mapStateToProps = state => ({
  dummyComponentApplication: state.dummyComponentApplicationState.dummyComponentApplication,
  isLoading: state.dummyComponentApplicationState.isLoading,
  isFailed: state.dummyComponentApplicationState.isFailed,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  refreshDummyComponentApplication: () => {
    dispatch(loadDummyComponentApplication(ownProps.service || dummyComponentApplicationService, ownProps.patientId));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(DummyComponentApplicationContainer);

const reducers = Object.assign({}, { dummyComponentApplicationState: dummyComponentApplicationReducers });
export { reducers };

const sagas = dummyComponentApplicationSagas;
export { sagas };
