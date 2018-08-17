import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PokemonCard from './PokemonCard';
import styles from './PokemonList.css';

export default class Articles extends Component {

  static propTypes = {
    pokemon: PropTypes.arrayOf(Object)
  };

  render() {
    const { pokemon } = this.props;

    return (
      <ul className={styles.list}>
        {pokemon.map((article, i) => (
          <PokemonCard key={i} article={article}/>
        ))}
      </ul>
    );
  }
}