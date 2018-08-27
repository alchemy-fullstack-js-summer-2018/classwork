import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Animals from './Animals';
import AnimalForm from './AnimalForm';
import { load, add, update } from './actions';
import { getAnimals } from './reducers';

class AnimalsContainer extends Component {
  
  static propTypes = { 
    animals: PropTypes.array,
    load: PropTypes.func.isRequired,
    add: PropTypes.func.isRequired
  };

  componentDidMount() {
    this.props.load();
  }

  handleComplete = (animal) => {
    const { add } = this.props;
    return add(animal);
  };

  render() { 
    const { animals } = this.props;
    
    return (
      <div>
        <section>
          <h3>Add an Animal</h3>
          <AnimalForm onComplete={this.handleComplete}/>
        </section>

        {animals && 
          <section>
            <h3>Animals</h3>
            <Animals 
              animals={animals}
              onUpdate={update}
            />
          </section>
        }
      </div>
    );
  }
}
 
export default connect(
  state => ({
    animals: getAnimals(state)
  }),
  { load, add }
)(AnimalsContainer);