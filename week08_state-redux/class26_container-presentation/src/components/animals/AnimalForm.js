import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AnimalForm extends Component {

  state = { 
    editing: false,
    name: '',
    type: ''
  };

  static propTypes = {
    onComplete: PropTypes.func.isRequired
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, type } = this.state;
    this.props.onComplete({ name, type });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() { 
    const { name, type } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        <InputControl name="name" value={name} onChange={this.handleChange}/>
        <InputControl name="type" value={type} onChange={this.handleChange}/>
        <p>
          <button>Add</button>
        </p>
      </form>
    );
  }
}

const InputControl = (props) => (
  <p>
    <label>
      {props.name}:
      <input {...props} required/>
    </label>
  </p>
);
 
export default AnimalForm;