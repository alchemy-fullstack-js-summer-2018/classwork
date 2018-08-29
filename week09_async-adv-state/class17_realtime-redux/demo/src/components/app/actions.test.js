jest.mock('../../services/firebase', () => ({
  auth: {
    onAuthStateChanged: jest.fn(),
    signInAnonymously: jest.fn()
  }
}));

import { login } from './actions';
import { USER_LOAD } from './reducers';
import { auth } from '../../services/firebase';

describe('app actions', () => {

  it('calls signin when no user', () => {
    const dispatch = jest.fn();
    const thunk = login();
    const onAuthMock = auth.onAuthStateChanged;
    const signInMock = auth.signInAnonymously;
    signInMock.mockReturnValueOnce(Promise.resolve());

    thunk(dispatch);

    expect(onAuthMock.mock.calls.length).toBe(1);
    const userCallback = onAuthMock.mock.calls[0][0];
    // simulate user event with no user
    userCallback();

    expect(signInMock.mock.calls.length).toBe(1);
  });

  it('dispatch USER_LOAD when user', () => {
    jest.clearAllMocks();
    const userObj = { uid: '123abc' };
    const dispatch = jest.fn();
    const thunk = login();
    const onAuthMock = auth.onAuthStateChanged;
    const signInMock = auth.signInAnonymously;
    signInMock.mockReturnValueOnce(Promise.resolve());

    thunk(dispatch);

    expect(onAuthMock.mock.calls.length).toBe(1);
    const userCallback = onAuthMock.mock.calls[0][0];
    // simulate user event with no user
    userCallback(userObj);

    expect(dispatch.mock.calls.length).toBe(1);
    const { type, payload } = dispatch.mock.calls[0][0];
    expect(type).toBe(USER_LOAD);
    expect(payload).toBe(userObj);

    expect(signInMock.mock.calls.length).toBe(0);
  });
});