import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './PokemonCard.css';
import logo from '../../assets/logo.png';

export default class Article extends Component {

  static propTypes = {
    article: PropTypes.object.isRequired
  };

  render() {
    const { article } = this.props;
    const { name, url } = article;
    const split = url.split('/');
    const id = split[split.length - 2];

    return (
      <li className={styles.card}>
        <Link to={`/articles/${id}`}>
          <img src={`sprites/pokemon/${id}.png`}/>
          <h3>{name}</h3>
        </Link>  
      </li>
    );
  }
}