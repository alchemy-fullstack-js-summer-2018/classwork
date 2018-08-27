jest.mock('../../services/api', () => ({
  getAllScores: jest.fn(),
  deleteScore: jest.fn()
}));

import { loadScores, removeScore } from './actions';
import { SCORES_LOAD, SCORE_REMOVE } from './reducers';
import { getAllScores, deleteScore } from '../../services/api';

describe('score actions', () => {

  it('loads scores', () => {
    const promise = Promise.resolve();
    getAllScores.mockReturnValueOnce(promise);

    const { type, payload } = loadScores();
    expect(type).toBe(SCORES_LOAD);
    expect(getAllScores.mock.calls.length).toBe(1);
    expect(payload).toBe(promise);
  });

  it('removes score', () => {
    const originalDeleteId = 2;
    const promise = Promise.resolve(originalDeleteId);
    deleteScore.mockReturnValueOnce(promise);
    const originalId = 1;

    const { type, payload } = removeScore(originalId);
    expect(type).toBe(SCORE_REMOVE);
    expect(deleteScore.mock.calls.length).toBe(1);
    expect(deleteScore.mock.calls[0][0]).toBe(originalId);
    
    return payload.then(({ deleteId, scoreId }) => {
      expect(scoreId).toBe(originalId);
      expect(deleteId).toBe(originalDeleteId);
    });
  });
});