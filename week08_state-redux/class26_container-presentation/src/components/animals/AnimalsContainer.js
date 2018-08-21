import React, { Component } from 'react';
import Animals from './Animals';
import AnimalForm from './AnimalForm';

class AnimalsContainer extends Component {
  state = { 
    animals: []
  };

  handleComplete = animal => {
    console.log('form add', animal);
  };

  render() { 
    const { animals } = this.state;
    
    return (
      <div>
        <section>
          <h3>Add an Animal</h3>
          <AnimalForm onComplete={this.handleComplete}/>
        </section>

        <section>
          <h3>Animals</h3>
          <Animals animals={animals}/>
        </section>
      </div>
    );
  }
}
 
export default AnimalsContainer;