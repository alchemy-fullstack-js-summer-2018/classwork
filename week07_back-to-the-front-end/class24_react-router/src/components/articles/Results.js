import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import qs from 'query-string';
import Articles from './Articles';
import Paging from '../paging/Paging';
import { getPokemon } from '../../services/pokemonApi';

class Results extends Component {
  
  state = {
    articles: null,
    totalResults: 0,
    page: 1,
    perPage: 20,
    loading: false,
    error: null
  };

  static propTypes = {
    location: PropTypes.object.isRequired
  };
    
  componentDidMount() {
    this.searchNews();
  }
  
  componentDidUpdate({ location }) {
    const { search: oldSearch } = qs.parse(location.search);
    if(oldSearch === this.searchTerm) return;
    this.searchNews();
  }

  handlePage = paging => {
    this.setState(paging, () => {
      this.searchNews();
    });
  };

  get searchTerm() {
    const { location } = this.props;
    const { search } = qs.parse(location.search);
    return search;
  }

  searchNews() {
    // const search = this.searchTerm;

    // if(!search) return;

    this.setState({ 
      loading: true,
      error: null
    });

    getPokemon()
      .then(
        ({ results }) => {
          this.setState({ 
            pokemon: results 
          });
        },
        err => {
          this.setState({ error: err.message });
        }
      )
      .then(() => {
        this.setState({ loading: false });
      });
  }

  render() { 
    const { pokemon, loading, error } = this.state;
    const { page, perPage, totalResults } = this.state;
    const { searchTerm } = this;

    return ( 
      <section>
        {(loading || error) &&
          <section className="notifications">
            {loading && <div>Loading...</div>}
            {error && <div>{error}</div>}
          </section>
        }

        {searchTerm && 
          <Fragment>
            <p>Searching for &quot;{searchTerm}&quot;</p>
            <Paging 
              page={page}
              perPage={perPage}
              totalResults={totalResults}
              onPage={this.handlePage}
            />
          </Fragment>
        }

        {pokemon 
          ? <Articles articles={pokemon}/>
          : <p>Please enter a search to get started</p>
        }
      </section>
    );
  }
}
 
export default Results;

