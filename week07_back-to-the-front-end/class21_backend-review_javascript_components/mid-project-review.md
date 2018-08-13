# Common Backend Issues

## Client Server Boundary

The Server API is the boundary where you _can_ control things. Everything outside of the server is beyond your control (you can't depend on "your" app).

Server can't be dumb CRUD server. It only supports certain domain actions.

## Security

You cannot trust `req.params` and `req.body`. Assume they lie and are
trying to be malicious and code your server appropriately

## Routes

* Avoid unneeded routes. CRUD is pattern not a requisite
* REST means paths describe resources

## Be Consistent

`respond` helper function needs to be used in **all** routes

## `throw` Errors 

In route promise chains, you need to `throw`. Calling `next` directly means execution continues through success path 

## Keep Promise Chains Flat

Sequential workflows should **not** be nested