import React, { Component, Fragment } from 'react';
import { search as searchNews } from '../services/newsApi';
import { addFavorite } from '../services/api';
import Header from './Header';
import Articles from './articles/Articles';
import Paging from './paging/Paging';
import styles from './App.css';

class App extends Component {

  state = {
    search: null,
    articles: null,
    totalResults: 0,
    page: 1,
    perPage: 20,
    loading: false,
    error: null
  };
  
  handleSearch = search => {
    this.setState({
      ...search,
      page: 1
    }, () => {
      this.searchNews();
    });
  };

  handlePage = paging => {
    this.setState(paging, () => {
      this.searchNews();
    });
  };

  handleScore = () => {
    addFavorite(12)
      .then(console.log, console.log);
  };

  searchNews() {
    const { search, page, perPage } = this.state;

    this.setState({ 
      loading: true,
      error: null
    });

    searchNews({ search }, { page, perPage })
      .then(
        ({ articles, totalResults }) => {
          this.setState({ articles, totalResults });
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
    const { articles, search, loading, error } = this.state;
    const { page, perPage, totalResults } = this.state;

    return (
      <div className={styles.app}>
        <header>
          <Header onSearch={this.handleSearch}/>
        </header>
        
        <main>
          <button onClick={this.handleScore}>score</button>
          {(loading || error) &&
            <section className="notifications">
              {loading && <div>Loading...</div>}
              {error && <div>{error}</div>}
            </section>
          }

          <section>
            {search && 
              <Fragment>
                <p>Search
                  ing for &quot;{search}&quot;</p>
                <Paging 
                  page={page}
                  perPage={perPage}
                  totalResults={totalResults}
                  onPage={this.handlePage}
                />
              </Fragment>
            }

            {articles 
              ? <Articles articles={articles}/>
              : <p>Please enter a search to get started</p>
            }
          </section>
        </main>
      </div>
    );
  }
}

export default App;