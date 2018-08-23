import { INCREMENT, DECREMENT, CHANGE } from './reducers';

export const increment = () => ({
  type: INCREMENT
});

export const decrement = () => ({
  type: DECREMENT
});

export const change = amount => ({
  type: CHANGE,
  payload: amount
});