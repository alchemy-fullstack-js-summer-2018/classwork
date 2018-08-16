import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

export default class Article extends Component {

  static propTypes = {
    pokemon: PropTypes.object.isRequired
  };

  render() {
    const { pokemon } = this.props;
    const { id, name, image } = pokemon;

    return (
      <li>
        <Link to={`/articles/${id}`}>
          {name}
          <img src={image}/>
        </Link>  
      </li>
    );
  }
}