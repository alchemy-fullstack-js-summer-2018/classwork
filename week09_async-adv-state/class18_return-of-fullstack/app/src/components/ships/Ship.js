import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';

class Ship extends PureComponent {

  render() {
    const { _id, name } = this.props;

    return (
      <li>
        <Link to={`/ships/${_id}`}>
          <h3>{name}</h3>
        </Link>
      </li>
    );
  }
}

export default Ship;