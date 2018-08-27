import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { remove } from './actions';

export class AnimalDisplay extends Component {
  static propTypes = {
    animal: PropTypes.object.isRequired,
    onEdit: PropTypes.func.isRequired,
    remove: PropTypes.func.isRequired
  };

  render() { 
    const { animal, onEdit, remove } = this.props;
    
    return ( 
      <p>
        {animal.name} the {animal.type}
        <button name="edit" onClick={onEdit}>✎</button>
        <button name="remove" onClick={() => remove(animal.key)}>🗑</button>
      </p>
    );
  }
}
 
export default connect(
  null,
  { remove }
)(AnimalDisplay);