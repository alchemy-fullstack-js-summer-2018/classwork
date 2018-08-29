import { db } from './firebase';

export const playersRef = db.ref('players');
export const gamesRef = db.ref('games');
export const userGamesRef = db.ref('userGames');
export const movesRef = db.ref('moves');