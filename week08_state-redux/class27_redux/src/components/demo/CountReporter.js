import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class CountReporter extends PureComponent {
  static propTypes = {
    count: PropTypes.number.isRequired
  };

  render() { 
    const { count } = this.props;

    return (
      <p>The count is now <strong>{count}</strong></p>
    );
  }
}
 
export default connect(
  state => ({ count: state }),
  null
)(CountReporter);