App-Side User Management and Auth
===

## Auth

### Server

Backend setup:

* User model
* Auth routes
* Protect with `ensureAuth` middleware

### App

#### Redux

1. (TDD) Reducer for auth workflows:
    * `user` - track the logged in user (`USER_AUTH` and `LOGOUT` )
    * (also okay to track `user` and `token` separately, in-class example just has user with token property)
1. (TDD) actions
    * mostly async actions based on authenticating and getting user
    * mock service api in test
    * `signin`, `signup`, `logout`, `verifyUser`
1. Add new reducer(s) to root reducer

#### Services

Add real service api methods

#### Components

Add Signin/up form(s):

* Presentational components
* Form(s) for credentials plus singup info
* Use `connect` to dispatch actions and detect `user`

#### Manage Token

1. Use in `request` module
    * subscribe to `store`
1. Bootstrap from (local)Storage
    * Usually in `App`, `connect` to `checkedAuth` state `tryLoadUser` action creator.
1. Use `checkedAuth` reducer to know that token has been checked
    * Avoids FOUU (Flash Of Unknown User) at load time

#### Routes

* Explicit Login/out "routes"
* `PrivateRoute` redirects to login, but "remembers" route on signin
    * `Auth` redirects when there *is* a user back to that "remembered" route
