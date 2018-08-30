import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { loadShips } from './actions';
import Ship from './Ship';
import AddShip from './AddShip';

class Ships extends PureComponent {

  componentDidMount() {
    this.props.loadShips();
  }

  render() {
    const { ships } = this.props;
    if(!ships) return null;

    return (
      <Fragment>
        <h2>Ships</h2>
        <ul>
          {ships.map(ship => <Ship key={ship._id} {...ship}/>)}
        </ul>
        <AddShip/>
      </Fragment>
    );
  }
}



export default connect(
  ({ ships }) => ({ ships }),
  { loadShips }
)(Ships);
