import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Animal extends Component {
  static propTypes = {
    animal: PropTypes.object.isRequired,
    onEdit: PropTypes.func.isRequired,
    onDelete: PropTypes.func.isRequired
  };

  render() { 
    const { animal, onEdit, onDelete } = this.props;
    
    return ( 
      <p>
        {animal.name} the {animal.type}
        <button name="edit" onClick={onEdit}>✎</button>
        <button name="delete" onClick={onDelete}>🗑</button>
      </p>
    );
  }
}
 
export default Animal;