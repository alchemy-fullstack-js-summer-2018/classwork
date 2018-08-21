import React, { Component } from 'react';
import PropTypes from 'prop-types';
import qs from 'query-string';

export default class Paging extends Component {

  static propTypes = {
    prev: PropTypes.string,
    next: PropTypes.string,
    perPage: PropTypes.number,
    total: PropTypes.number,
    onPage: PropTypes.func.isRequired
  };

  get page() {
    const { prev } = this.props;
    if(!prev) return 1;
    
    const { limit, offset = 0 } = qs.parse(prev.split('?')[1]);
    return (+offset / +limit) + 2;
  }

  render() {
    const { prev, next, onPage } = this.props;
    const { perPage, total } = this.props;
    const totalPages = Math.ceil(total / perPage);




    return (
      <div>
        <span>Page {this.page} of {totalPages}</span>
        &nbsp;
        <button onClick={() => onPage(prev)} disabled={!prev}>&lt; Prev</button>
        <button onClick={() => onPage(next)} disabled={!next}>Next &gt;</button>
      </div>
    );
  }
}
