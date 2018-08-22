import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import AnimalDisplay from './AnimalDisplay';
import AnimalForm from './AnimalForm';
import { update } from './actions';

class Animal extends Component {

  state = {
    editing: false
  };

  static propTypes = {
    animal: PropTypes.object.isRequired,
    update: PropTypes.func.isRequired
  };

  handleEdit = () => {
    this.setState({ editing: true });
  };

  handleComplete = animal => {
    const { update } = this.props;
    update(animal);
    this.handleEndEdit();
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
 
export default connect(
  null,
  { update }
)(Animal);