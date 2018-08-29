import { user, USER_LOAD } from './reducers';

describe('user reducer', () => {

  it('inits to null', () => {
    const state = user(undefined, {});
    expect(state).toBe(null);
  });

  it('loads user', () => {
    const userObj = {};
    const state = user(null, {
      type: USER_LOAD,
      payload: userObj
    });
    expect(state).toBe(userObj);
  });
});