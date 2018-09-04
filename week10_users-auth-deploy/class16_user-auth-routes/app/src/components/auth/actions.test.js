jest.mock('../../services/api', () => ({
  signin: jest.fn(),
  signup: jest.fn(),
  verify: jest.fn()
}));

import { signup, signin, logout } from './actions';
import { USER_AUTH, LOGOUT } from './reducers';
import { 
  signup as signupSvc, 
  signin as signinSvc } from '../../services/api'; 

describe('auth action creators', () => {

  function testAuth(name, mockSvc, actionCreator) {
    it(`creates ${name} action`, () => {
      const promise = Promise.resolve();
      mockSvc.mockReturnValueOnce(promise);
      
      const credentials = {};
      const { type, payload } = actionCreator(credentials);
      expect(type).toBe(USER_AUTH);
      expect(payload).toBe(promise);
      expect(mockSvc.mock.calls.length).toBe(1);
      expect(mockSvc.mock.calls[0][0]).toBe(credentials);
    });
  }

  testAuth('signup', signupSvc, signup);
  testAuth('signin', signinSvc, signin);

  it('creates logout action', () => {
    const { type } = logout();
    expect(type).toBe(LOGOUT);
  });
});