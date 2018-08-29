import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getUser, getGames } from './reducers';
import { requestGame } from './actions';

export class Home extends Component {
  
  static propTypes = {
    user: PropTypes.object,
    games: PropTypes.array.isRequired,
    requestGame: PropTypes.func.isRequired
  };

  render() { 
    const { user, games, requestGame } = this.props;

    return (
      <div>
        <h2>Play Rock Paper Scissors in Real Time</h2>
        {user && <UserGames games={games} onRequest={requestGame}/>}
      </div>
    );
  }
}

export default connect(
  state => ({
    user: getUser(state),
    games: getGames(state)
  }),
  { requestGame }
)(Home);

export const UserGames = ({ onRequest, games }) => {
  return (
    <section>
      <button onClick={onRequest}>Play Game</button>
      <ul>
        {games.map((gameKey, i) => (
          <li key={gameKey}>
            <Link to={`/games/${gameKey}`}>Game {i + 1}</Link>
          </li>
        ))}
      </ul>
    </section>
  );
};

UserGames.propTypes = {
  games: PropTypes.array.isRequired,
  onRequest: PropTypes.func.isRequired
};
 