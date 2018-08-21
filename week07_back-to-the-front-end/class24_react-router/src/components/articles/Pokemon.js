import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import qs from 'query-string';
import PokemonList from './PokemonList';

class Results extends Component {

  // componentDidUpdate({ location }) {
  //   const { search: oldSearch } = qs.parse(location.search);
  //   if(oldSearch === this.searchTerm) return;
  //   this.loadPokemon();
  // }


  render() { 
    const { pokemon } = this.state;

    return ( 
      <section>
        {(loading || error) &&
          <section className="notifications">
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
          </section>
        }


        {pokemon 
          ? <PokemonList pokemon={pokemon}/>
          : <p>Please enter a search to get started</p>
        }
      </section>
    );
  }
}
 
export default Results;

