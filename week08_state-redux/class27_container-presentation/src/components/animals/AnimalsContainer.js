import React, { Component } from 'react';
import Animals from './Animals';
import AnimalForm from './AnimalForm';
import { 
  getAnimals, 
  addAnimal, 
  updateAnimal, 
  removeAnimal } from '../../services/animalsApi';

class AnimalsContainer extends Component {
  
  state = { 
    animals: null
  };

  componentDidMount() {
    getAnimals()
      .then(animals => {
        this.setState({ animals });
      });
  }

  handleAdd = animal => {
    return addAnimal(animal)
      .then(added => {
        this.setState(({ animals }) => {
          return {
            animals: [...animals, added]
          };
        });
      });
  };

  handleUpdate = animal => {
    return updateAnimal(animal)
      .then(updated => {
        this.setState(({ animals }) => {
          return {
            animals: animals.map(animal => animal.key === updated.key ? updated : animal)
          };
        });
      });
  };

  handleRemove = key => {
    return removeAnimal(key)
      .then(() => {
        this.setState(({ animals }) => {
          return {
            animals: animals.filter(animal => animal.key !== key)
          };
        });
      });
  };

  render() { 
    const { animals } = this.state;
    
    return (
      <div>
        <section>
          <h3>Add an Animal</h3>
          <AnimalForm onComplete={this.handleAdd}/>
        </section>

        {animals && 
          <section>
            <h3>Animals</h3>
            <Animals 
              animals={animals}
              onUpdate={this.handleUpdate}
              onRemove={this.handleRemove}
            />
          </section>
        }
      </div>
    );
  }
}
 
export default AnimalsContainer;