# Class 06 EventEmitters and Streams

## Questions and Issues?

* Welcome to Express!
* Feedback
	* BC 2 Final Project _will be graded_ (sorry!)
	* Toolset Model
		* API Domain Problems
		* Express/Mongoose
			* http/mongodb
		* Asynchronous JS and Function Passing
		* [JavaScript Basics](https://github.com/alchemycodelab/javascript-career-track-prerequisites)
* Making a template
* ?

## Today's Learning Objectives

* “Starting” an express app
* Setup app routing _with ExpressJS_ using method and path matching.
* Use `:id` and `req.params` to capture dynamic path parts
* Use `req.query` to read query parameters
* Use `res.send()` and/or `res.json` to send response
* Handle correct order of routes
* `app.use()`
	* Serve static assets using `express.static(<path-to-serve>)`
	* Parse json using `express.json()`

## Agenda

### ExpressJS

* routing
	* How express solves method/path:
		* method based functions (`app.get`)
		* that take a path
	* `req.query` 
		* query params as key/value pairs
		* always safe to access - empty `{}`
	* `req.params`
		* dynamic path portions (great for id's)
		* parameters (route and query)
	* `res.send()` and `res.json()`
		* sets headers
	* EXERCISE: Echo server
		* Review [HTTP URL](http://bl.ocks.org/abernier/3070589)
		* Using `/:id` is a way to "capture" (define) parameters, not provide them
* order matters
* `app.use()`
	* static
		* `express.static` (included with express)
		* files
		* `res.sendFile()`
	* `express.json()`
	* `express.Router()`
* express Router
	* externalize routes to own file
* project structure
	* don't use one huge app.js file!
	* Food for thought: express generator

### Spread Operator `...`

* Shorthand for `Object.assign`
* Works for maps into arrays

### Error Handling

_Time permitting_