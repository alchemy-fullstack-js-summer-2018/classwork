const { createStore, applyMiddleware } = require('redux');

const reducer = (state = 0, { type }) => {
  if(type === 'ADD') return state + 1;
  if(type === 'SUBTRACT') return state - 1;
  return state;
};

const logger = store => next => action => {
  console.log('received', action);
  const result = next(action);
  console.log('done calling next', result);
};

// above same as
// function logger(store) {
//   return function(next) {
//     return function(action) {

//     }
//   }
// }

const thunk = ({ dispatch, getState }) => next => action => {
  if (typeof action === 'function') {
    return action(dispatch, getState);
  }

  return next(action);
};


const store = createStore(
  reducer,
  applyMiddleware(
    logger,
    thunk
  )
);

store.subscribe(() => {
  console.log('store changed', store.getState());
});

const addActionCreator = () => {
  return dispatch => {
    setTimeout(() => {
      dispatch({ type: 'ADD' });
    }, 5000);
  }
}

store.dispatch(addActionCreator());

