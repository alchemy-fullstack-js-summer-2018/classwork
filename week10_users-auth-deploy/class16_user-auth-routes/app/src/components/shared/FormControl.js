import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './FormControl.css';

class FormControl extends PureComponent {

  static propTypes = {
    label: PropTypes.string,
    children: PropTypes.element
  };

  render() {
    const { label, children } = this.props;

    return (
      <div className={styles['form-control']}>
        { label && <label>{label}:</label> }
        <div className="control">
          {children}
        </div>
      </div>
    );
  }
}

export default FormControl;