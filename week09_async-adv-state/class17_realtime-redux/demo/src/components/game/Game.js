import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getGame } from './reducers';
import { getUser } from '../app/reducers';
import { loadGame, unloadGame, move } from './actions';

class Game extends Component {
  static propTypes = {
    match: PropTypes.object,
    game: PropTypes.object,
    user: PropTypes.object,
    loadGame: PropTypes.func.isRequired,
    unloadGame: PropTypes.func.isRequired
  };

  componentDidMount() {
    const { match, loadGame } = this.props;
    loadGame(match.params.gameKey);
  }

  componentWillUnmount() {
    const { match, unloadGame } = this.props;
    unloadGame(match.params.gameKey);  
  }

  render() { 
    const { game, user, move } = this.props;
    if(!game || !user) return null;

    const { uid } = user;
    const who = player => player === uid ? 'YOU' : 'THEM';

    const player1 = who(game.player1);
    const player2 = who(game.player2);

    return (
      <section>
        <h2>Players</h2>
        <p>
          {player1} vs {player2}
        </p>

        <ul>
          {game.rounds && Object.keys(game.rounds).map((key, i) => {
            const round = game.rounds[key];
            return (
              <li key={i}>
                <ul>
                  {round.moves.map(move => (
                    <li key={move.uid}>{who(move.uid)}: {move.play}</li>
                  ))}
                  <li>winner: {who(round.winner)}</li>
                </ul>
              </li>
            );
          })}
        </ul>

        <p>
          {['ROCK', 'PAPER', 'SCISSORS'].map(play => (
            <button 
              key={play}
              onClick={() => move(play)}>
              {play}
            </button>
          ))}
        </p>
      
      </section>
    );
  }
}
 
export default connect(
  (state) => ({
    game: getGame(state),
    user: getUser(state)
  }),
  { loadGame, unloadGame, move }
)(Game);