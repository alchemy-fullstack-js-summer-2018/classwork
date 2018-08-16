import React, { Component } from 'react';
import qs from 'query-string';
import PropTypes from 'prop-types';
import './Search.css';

class Search extends Component {
  
  state = {
    search: ''
  };

  static propTypes = {
    history: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
  };

  componentDidMount() {
    const { location } = this.props;
    const { search = '' } = qs.parse(location.search);
    this.setState({ search });
  }
  
  handleSubmit = event => {
    event.preventDefault();
    const { search } = this.state;
    if(!search) return;

    const { history } = this.props;
    history.push({
      pathname: '/search',
      search: qs.stringify({ search })
    });

  };

  handleChangeSearch = ({ target }) => {
    this.setState({ search: target.value });
  };

  render() {
    const { search } = this.state;

    return (
      <form className="search-form" onSubmit={event => this.handleSubmit(event)}>
        <label>
          Search For:&nbsp;
          <input name="search" value={search} onChange={this.handleChangeSearch}/>
        </label>
        <button>Search</button>
      </form>
    );
  }
}

export default Search;
