import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { increment, decrement } from './actions';

class Counter extends PureComponent {
  static propTypes = {
    count: PropTypes.number.isRequired,
    increment: PropTypes.func.isRequired,
    decrement: PropTypes.func.isRequired
  };

  render() { 
    const { count, increment, decrement } = this.props;

    return (
      <section>
        <button onClick={decrement}>-</button>
        {count}
        <button onClick={increment}>+</button>
      </section>
    );
  }
}

export default connect(
  // mapStateToProps
  state => ({
    count: state
  }),
  // mapDispatchToProps
  { increment, decrement }
)(Counter);