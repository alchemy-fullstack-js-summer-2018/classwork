export const GAME_LOAD = 'GAME_LOAD';

export const getGame = state => state.game;

export function game(state = null, { type, payload }) {
  return type === GAME_LOAD ? payload : state;
}