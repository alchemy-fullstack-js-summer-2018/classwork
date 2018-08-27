import { count, INCREMENT, DECREMENT, CHANGE } from './reducers';

describe('demo reducers', () => {

  it('initializes count to 0', () => {
    const state = count(undefined, {});
    expect(state).toBe(0);
  });

  it('increments the count', () => {
    const state = count(0, { type: INCREMENT });
    expect(state).toBe(1);
  });

  it('decrements the count', () => {
    const state = count(5, { type: DECREMENT });
    expect(state).toBe(4);
  });

  it('changes by amount', () => {
    const state = count(5, { type: CHANGE, payload: 3 });
    expect(state).toBe(8);
  });
});