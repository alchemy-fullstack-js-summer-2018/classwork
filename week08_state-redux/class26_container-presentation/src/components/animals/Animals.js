import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Animals extends Component {
  static propTypes = {
    animals: PropTypes.array
  };

  render() { 
    return (
      <div>I will present the animals</div>
    );
  }
}

export default Animals;