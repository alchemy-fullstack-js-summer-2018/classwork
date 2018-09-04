import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getPetById } from './reducers';
import { Link } from 'react-router-dom';

class PetItem extends PureComponent {

  static propTypes = {
    pet: PropTypes.object
  };

  render() {
    const { pet } = this.props;

    return (
      <li>
        <Link to={`/pets/${pet._id}`}>{pet.name}</Link>
      </li>
    );
  }
}

export default connect(
  (state, { id }) => ({ 
    pet: getPetById(state, id) 
  }),
  null
)(PetItem);