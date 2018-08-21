import React, { Component } from 'react';
import Animals from './Animals';

class AnimalsContainer extends Component {
  state = { 
    animals: []
  };

  render() { 
    const { animals } = this.state;
    
    return (
      <div>
        <div>I will manage the state for animals</div>
        <Animals animals={animals}/>
      </div>
    );
  }
}
 
export default AnimalsContainer;