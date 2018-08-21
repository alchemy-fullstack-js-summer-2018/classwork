import React, { Component } from 'react';
import { getPokemonList } from '../../services/pokemonApi';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Header from './Header';
import Home from './home/Home';
import Pokemon from './articles/Pokemon';
import ArticleDetail from './articles/ArticleDetail';
import Favorites from './favorites/Favorites';
import styles from './App.css';

class App extends Component {

  state = {
    pokemon: null,
    paging: {
      total: 0,
      prev: null,
      next: null
    },
    loading: false,
    error: null
  };

  handlePage = url => this.loadPokemon(url);

  loadPokemon(url) {
    this.setState({ 
      loading: true,
      error: null
    });

    getPokemonList(url)
      .then(
        ({ results, count, previous, next }) => {
          this.setState({ 
            pokemon: results,
            paging: {
              total: count,
              prev: previous,
              next
            }
          });
        },
        // err => {
        //   this.setState({ error: err.message });
        // }
      )
      .then(() => {
        this.setState({ loading: false });
      });
  }

  componentDidMount() {
    this.loadPokemon();
  }

  handlePage = url => this.loadPokemon(url);


  render() {
    const { pokemon, paging, loading, error } = this.state;

    return (
      <Router>
        <div className={styles.app}>
          <header>
            <Header 
              paging={paging}
              onPage={this.handleSearch}/>
          </header>
          
          <main>
            {(loading || error) &&
              <section className="notifications">
                {loading && <div>Loading...</div>}
                {error && <div>{error}</div>}
              </section>
            }
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/favorites" component={Favorites}/>
              <Route exact path="/articles" render={() => (
                <Pokemon pokemon={pokemon}/>
              )}/>
              <Route path="/articles/:id" component={ArticleDetail}/>
              <Redirect to="/"/>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App;