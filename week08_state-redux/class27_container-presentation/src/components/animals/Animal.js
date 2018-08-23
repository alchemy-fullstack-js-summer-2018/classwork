import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AnimalDisplay from './AnimalDisplay';
import AnimalForm from './AnimalForm';

class Animal extends Component {

  state = {
    editing: false
  };

  static propTypes = {
    animal: PropTypes.object.isRequired,
    onRemove: PropTypes.func.isRequired,
    onUpdate: PropTypes.func.isRequired
  };

  handleEdit = () => {
    this.setState({ editing: true });
  };

  handleDelete = () => {
    const { animal, onRemove } = this.props;
    return onRemove(animal.key);
  };

  handleComplete = animal => {
    const { onUpdate } = this.props;
    return onUpdate(animal).then(this.handleEndEdit);
  };

  handleEndEdit = () => {
    this.setState({ editing: false });
  };

  render() { 
    const { editing } = this.state;
    const { animal } = this.props;

    return ( 
      <li>
        {editing
          ? <AnimalForm
            animal={animal}
            onComplete={this.handleComplete}
            onCancel={this.handleEndEdit}
          />
          : <AnimalDisplay
            animal={animal}
            onEdit={this.handleEdit}
            onDelete={this.handleDelete}
          />
        }
      </li>
    );
  }
}
 
export default Animal;