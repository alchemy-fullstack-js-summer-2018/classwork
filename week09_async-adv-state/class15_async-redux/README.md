Async Redux
===

## React Quiz

## Redux Summary/Review

1. `store` - takes `reducer`
    * Use `combineReducers` to create a single `rootReducer`
1. `reducer`(s) - takes actions with `type` and `payload`
    * Can be split into more targeted reducers (that are then combined)
1. `constants` - "type" identifier for each `action`
    * Can live in `reducer.js` file _or_ in `actions.js`
    * You may create other constants for app domain logic
1. action creators - functions that can take (optional) parameter arguments and returns the created action with
    * `type` property that is an action `constant`,
    * and (optional) `payload` of whatever data is required
    for the store to complete the action
1. `connect` - a utility for interfacing `redux` store with `react` components
    * `mapStateToProps` - Function that will receive store state and returns 
    what props should be injected into component based on the state
    * `mapDispatchToProps` - Function that will receive the dispatch function and returns what action creating functions should be injected
    as props into the component
        1. Hand-roll your own functions, _or_
        1. Use `bindActionCreators` to wrap into dispatch functions, _or_
        1. **Pass an object literal** and `bindActionCreators` will be called on your
        behalf
    * `mergeProps` - Optional function that takes `stateProps` (from #1), `dispatchProps` (from #2), and `ownProps` (directly passed to the component
    by its parent). Return the actual props that will be injected into the component.

## Redux Middleware

Use `applyMiddleware` to add middleware to your dispatch

* middleware can intercept or modify each action
* you often will use existing middle via `npm i <middleware>`
* basic format:
    ```js
    const myMiddleware = store => next => action => {
        const result = next(action);
        return result
    }
    ```
* simple `logger` example
* [`thunk` middleware](https://github.com/gaearon/redux-thunk) is the answer for async!
    * Let's review the code!
    * Allows us to specify a function `dispatch => {}` as an action
    * That function gets called with dispatch and then we can do 
    multiple calls at multiple times
    * Full signature is `(dispatch, getState) => {}`

### Example

Route data calls to mock-async services api

#### Testing Action Creator

Approaches for "mocking" API:
* Higher Order Function
* Jest Mock
* API injection using [redux-thunk](https://github.com/gaearon/redux-thunk/blob/master/src/index.js)

## Loading and Errors

** Probably on Monday! **

### `promise-middleware`

Dealing with details like loading and proper error handling is often
omitted from how-to and introductory articles.

Let's dive into details!

#### App

Three choices:
1. App wide handling of loading and errors
1. Per feature loading and error handling
1. Hybrid of #1, and specialize with #2 when needed

Given your time frame on labs and projects, go for #1, unless compelling reason

#### Loading

1. Track `loading` state in `store`
1. Set true before beginning async activity
1. Set false on error or resolve

## Async Errors

1. Network error/no connection
  * Immediate or Async?
  * DEMO/EXERCISE
1. Server availability error
  * CRA server running, but forgot to hit proxy
  * May not be `application/json`!
  * DEMO/EXERCISE
1. Validation/Expected errors
  * For forms, get result before dismissing or clearing
  * (Need to account for validation errors being arrays)
  * DEMO/EXERCISE
1. Unexpected Errors
  * No immediate remedy, but otherwise the same
  * DEMO/EXERCISE

### Common handlers

1. Easier way to manage async with single promise
1. `<Loading/>` and `<Error/>` components
1. testing reducers and actions
omitted from how-to and introductory articles.

* Remove duplication and avoid boilerplate!


### Presentation

* Common Loading and Error components