Mongo Aggregation
===

## Questions and Issues
* ?

## Learning Objectives

1. Learn to use `mongoimport` and `mongoexport`
1. Create aggregation pipelines to understand data in mongodb

## Aggregation

[To the docs!](https://docs.mongodb.com/manual/aggregation/)

### Aggregation Pipeline

* [Aggregation Pipeline](https://docs.mongodb.com/manual/core/aggregation-pipeline/)
* Happens on the server
* Exposed on each model as `.aggregate`, but is a pass-thru (no special mongoose logic)
* Process
    1. Have data to analyze. `primer-data.json`
        * `mongoimport` 
            * is list of objects (not array!)
    2. Work out commands in RoboMongo
    3. Copy to Route
* [Operators]

### Exercise

Restaurant Data

## Testing

1. Load data to mongo
1. Use `mongoexport` to export
1. Use `child_process.execSync` to load