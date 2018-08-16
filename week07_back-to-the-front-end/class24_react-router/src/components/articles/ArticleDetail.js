import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getPokemon } from '../../services/pokemonApi';
import { addFavorite, getFavorite, removeFavorite } from '../../services/favoritesApi';

export default class Article extends Component {

  state = {
    pokemon: null,
    favorite: null
  };

  static propTypes = {
    match: PropTypes.object.isRequired
  };

  componentDidMount() {
    const { id } = this.props.match.params;
    getPokemon(id)
      .then(pokemon => {
        this.setState({ pokemon });
      })
      .catch(console.log);

    getFavorite(id)
      .then(favorite => {
        this.setState({ favorite });
      })
      .catch(console.log);
  }

  handleClick = () => {
    const { pokemon, favorite } = this.state;
    const isFavorite = !!favorite;

    if(isFavorite) {
      removeFavorite(pokemon.id)
        .then(() => {
          this.setState({ favorite: null });
        })
        .catch(console.log);
    }
    else {
      addFavorite(this.state.pokemon)
        .then(favorite => {
          this.setState({ favorite });
        })
        .catch(console.log);
    }
  };

  render() {
    const { pokemon, favorite } = this.state;
    if(!pokemon) return null;

    const { name, sprites } = pokemon;

    return (
      <article>
        <h2>{name}</h2>
        <img src={sprites.front_default}/> 
        <button onClick={this.handleClick}>
          {favorite ? 'Remove From' : 'Add To' } Favorites
        </button>
      </article>
    );
  }
}