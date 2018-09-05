import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getPetList } from './reducers';
import { loadPets } from './actions';
import PetItem from './PetItem';

class PetList extends PureComponent {

  static propTypes = {
    loadPets: PropTypes.func.isRequired,
    pets: PropTypes.array
  };

  componentDidMount() {
    this.props.loadPets();
  }

  render() {
    const { pets } = this.props;

    return (
      <section>
        <Link to="/pets/new">Add a New Pet</Link>
        <ul>
          {pets.map(id => <PetItem key={id} id={id}/>)}
        </ul>
      </section>
    );
  }
}

export default connect(
  state => ({ pets: getPetList(state) }),
  { loadPets }
)(PetList);