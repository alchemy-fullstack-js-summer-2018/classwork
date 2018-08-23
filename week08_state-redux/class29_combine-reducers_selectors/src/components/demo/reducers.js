export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const CHANGE = 'CHANGE';

export const getCount = state => state.count;

export function count(state = 0, { type, payload }) {
  switch(type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    case CHANGE:
      return state + payload;
    default: 
      return state;
  }
}