# Class 12 Mongoose

## Questions and Issues?
* Quiz Review
* ?

## Today's Learning Objectives

* Learn to use mongoose to enforce data schema and validate data

## Preflight

Survey today's expected outcome

## Mongoose
* Why?
* use `npm i mongoose -S` (no need for `mongodb`)
* Mongoose Schemas
	* Defining “Properties” (aka paths)
		* Types and property options
		* How to nest
			* Arrays: inside `[]` is example type of this array
			* Complex Objects: use `{}`
	* Turn into models...
	* **DEMO 1**: Testing models
    * **EXERCISE 1**: Make a tested model
	* Validation:
    	* required
		* `enum`
		* validation...
	* **DEMO 1**: Testing model validation
    * **EXERCISE 2**: Tested model validation
* Consuming models in routes
    * Connecting - `mongoose.connect`, but look at in class example for more complete file
    * Differences from raw mongodb drivers:
        * Use `mongoose` in requires and for creating the connection
        * No `ObjectID` required
        * No `toArray` or `res.ops[0]`
        * Additional static methods: `findById` and friends
        * Adds a `__v` prop
	* Static model methods (`Model.findOne()`)
	* instance models (`model.save()`, or `Model.create()`)
	* Additional modifiers:
		* `select`
		* `lean`
		* `where`
		* `count`
    * Testing mongodb
        * Running test server for use in e2e testing
        * Preparing resources for testing
    * **EXERCISE 3:** Using Mongoose methods
* More Schema Options
	* timestamp

## Searching

_Time Permitting_