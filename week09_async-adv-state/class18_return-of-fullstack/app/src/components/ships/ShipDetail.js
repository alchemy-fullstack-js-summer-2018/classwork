import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { loadShip, removeShip } from './actions';

class ShipDetail extends PureComponent {

  componentDidMount() {
    const { loadShip, match } = this.props;
    loadShip(match.params.id);
  }

  handleRemove = () => {
    if(!confirm('Are you sure you want to remove this ship?')) return;

    const { ship: { _id }, removeShip, history } = this.props;
    removeShip(_id).then(() => history.push('/ships'));
  };

  render() {
    const { ship } = this.props;
    if(!ship) return null;

    const { name, sails, features } = ship;

    return (
      <article>
        <h3>
          {name}
          <button onClick={this.handleRemove}>🗑</button>
        </h3>
        {sails && <p>{sails} sails</p>}
        {features && <ul>{features.join(', ')}</ul>}
      </article>
    );
  }
}

export default connect(
  ({ ship }) => ({ ship }),
  { loadShip, removeShip }
)(ShipDetail);