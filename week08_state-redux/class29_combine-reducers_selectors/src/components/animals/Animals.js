import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Animal from './Animal';

class Animals extends Component {
  
  static propTypes = {
    animals: PropTypes.array
  };

  render() { 
    const { animals } = this.props;
    
    return (
      <ul>
        {animals.map(animal => (
          <Animal 
            key={animal.key} 
            animal={animal}
          />
        ))}
      </ul>
    );
  }
}

export default Animals;