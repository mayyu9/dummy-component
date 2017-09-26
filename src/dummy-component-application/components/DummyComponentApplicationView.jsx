import React from 'react';
import PropTypes from 'prop-types';
import ContentContainer from 'terra-content-container';
import ClinicalItemView from 'terra-clinical-item-view';
import Header from 'terra-clinical-header';
import ErrorView from 'terra-clinical-error-view';
import NoDataView from 'terra-clinical-no-data-view';
import { injectIntl } from 'react-intl';
import Button from 'terra-button';

const propTypes = {
  text: PropTypes.string,
  isLoading: PropTypes.bool,
  isFailed: PropTypes.bool,
  intl: PropTypes.object.isRequired,
};

const DummyComponentApplicationView = (props) => {
  const { isLoading, isFailed, text, intl } = props;
  let content;

  if (isLoading) {
    content = null;
  } else if (isFailed) {
    content = <ErrorView description={intl.formatMessage({ id: 'dummy-component-engine.dummy-component-application-failed-to-load' })} isGlyphHidden />;
  } else if (text && text.length > 0) {
  content = <DummyComponent text ="MS"/>

  } else {
    content = <NoDataView heading={intl.formatMessage({ id: 'dummy-component-engine.no-dummy-component-application' })} isGlyphHidden />;
  }

  return (
    <ContentContainer header={<Header title={intl.formatMessage({ id: 'dummy-component-engine.dummy-component-application' })} />}>
      {content}
    </ContentContainer>
  );
};

class DummyComponent extends React.Component{
render(){
return(
<Button text= {this.props.text} />
)
}
}
DummyComponentApplicationView.propTypes = propTypes;

export default injectIntl(DummyComponentApplicationView);
