import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Animal from './Animal';

class Animals extends Component {
  
  static propTypes = {
    animals: PropTypes.array,
    onUpdate: PropTypes.func.isRequired,
    onRemove: PropTypes.func.isRequired
  };

  render() { 
    const { animals, onUpdate, onRemove } = this.props;
    
    return (
      <ul>
        {animals.map(animal => (
          <Animal 
            key={animal.key} 
            animal={animal}
            onUpdate={onUpdate}
            onRemove={onRemove}
          />
        ))}
      </ul>
    );
  }
}

export default Animals;