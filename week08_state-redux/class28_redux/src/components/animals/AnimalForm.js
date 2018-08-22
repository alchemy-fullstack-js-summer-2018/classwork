import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AnimalForm extends Component {

  state = { 
    editing: false,
    key: null,
    name: '',
    type: ''
  };

  static propTypes = {
    animal: PropTypes.object,
    onComplete: PropTypes.func.isRequired,
    onCancel: PropTypes.func
  };

  componentDidMount() {
    const { animal } = this.props;
    if(!animal) return;

    this.setState(animal);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, type, key } = this.state;
    const animal = { name, type };
    if(key) animal.key = key;

    this.props.onComplete(animal)
      .then(() => {
        if(!key) return;
        this.setState({ name: '', type: '' });
      });
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  render() { 
    const { key, name, type } = this.state;
    const { onCancel } = this.props;

    return (
      <form onSubmit={this.handleSubmit}>
        <InputControl name="name" value={name} onChange={this.handleChange}/>
        <InputControl name="type" value={type} onChange={this.handleChange}/>
        <p>
          <button type="submit">{ key ? 'Update' : 'Add' }</button>
          {key && <button type="button" onClick={onCancel}>Cancel</button>}
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