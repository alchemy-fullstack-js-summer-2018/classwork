import React, { Component } from 'react';
import Counter from './Counter';
import CountReporter from './CountReporter';

class Demo extends Component {
  render() { 
    return (
      <section>
        <h2>Redux Demos</h2>
        <Counter/>
        <CountReporter/>
      </section>
    );
  }
}
 
export default Demo;