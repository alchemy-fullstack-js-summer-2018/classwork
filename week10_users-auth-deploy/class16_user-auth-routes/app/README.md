Loading, Errors and Async
===

## Loading

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

## Common handlers

1. Easier way to manage async with single promise
1. `<Loading/>` and `<Error/>` components
1. testing reducers and actions
omitted from how-to and introductory articles.

* Remove duplication and avoid boilerplate!


### Presentation

* Common Loading and Error components

## Testing Action Creators

Approaches for "mocking" API:
* Higher Order Function
* Jest Mock
* API injection using [redux-thunk](https://github.com/gaearon/redux-thunk/blob/master/src/index.js)

