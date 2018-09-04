import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './Credentials.css';
import FormControl from '../shared/FormControl';

export default class Credentials extends PureComponent {

  static propTypes = {
    submit: PropTypes.func.isRequired,
    action: PropTypes.string.isRequired,
    allowName: PropTypes.bool
  };

  state = {
    name: '',
    email: '',
    password: ''
  };

  handleChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    this.props.submit(this.state)
      // nothing to do except catch error
      // so runtime doesn't think unhandled
      .catch(() => {});
  }

  render() {
    const { action, allowName = false } = this.props;
    const { name, email, password } = this.state;

    return (
      <form className={styles.credentials} onSubmit={this.handleSubmit}>
        { allowName && 
          <FormControl label="name">
            <input name="name" value={name} onChange={this.handleChange}/>
          </FormControl>
        }
        <FormControl label="email">
          <input name="email" value={email} onChange={this.handleChange}/>
        </FormControl>

        <FormControl label="password">
          <input type="password" name="password"
            value={password} onChange={this.handleChange}/>
        </FormControl>
        
        <FormControl>
          <button>{action}</button>
        </FormControl>
      </form>
    );
  }
}