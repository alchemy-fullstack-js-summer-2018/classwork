import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import styles from './App.css';

class App extends PureComponent {

  render() {

    return (
      <Router>
        <div>
          <Header/>
          <main className={styles.app}>
            <Switch>
              <Route exact path="/" component={Home}/>
              {/* <Route path="/whatever" component={Whatever}/> */}
              <Redirect to="/"/>
            </Switch>
          </main>
        </div>
      </Router>
    );
  }
}

export default App