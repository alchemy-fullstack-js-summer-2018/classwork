import { INCREMENT, CHANGE } from './reducers';

export const increment = () => ({
  type: INCREMENT
});

export const change = amount => ({
  type: CHANGE,
  payload: amount
});