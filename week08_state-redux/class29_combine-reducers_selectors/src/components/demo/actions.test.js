import { increment, change } from './actions';
import { INCREMENT, CHANGE } from './reducers';

describe('counter actions', () => {

  it('increment', () => {
    const action = increment();
    expect(action).toEqual({ type: INCREMENT });
  });

  it('change', () => {
    const action = change(4);
    expect(action).toEqual({
      type: CHANGE,
      payload: 4
    });
  })
});