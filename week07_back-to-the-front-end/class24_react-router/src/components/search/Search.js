import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Search.css';

export default class Search extends Component {
  
  state = {
    search: ''
  };

  static propTypes = {
    onSearch: PropTypes.func.isRequired
  };
  
  handleSubmit = event => {
    event.preventDefault();
    this.props.onSearch(this.state);
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
