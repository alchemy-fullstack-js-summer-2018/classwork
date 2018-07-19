# Class 14 Model Relationships

## Questions and Issues?

* ?


## Today's Learning Objectives

* Create related data models based on data usage patterns using mongoose schema options.
* Control json using mongoose `select()`, `populate()`, and `lean()`
* (Time allowing: Consolidate business logic in models using static and instance mongoose model methods)

## Agenda

### Modelling

#### Data Relationships

* one to one
* one to many
    * Intra-document
    * Separate document
* many to many

#### Relating Models

Use "keys" (id's) to point to another document:

* Primary Key
    * Unique identifier for an entity
    * `_id` in mongo land
* Foreign Key
    * Another documents identifier stored as data in a field
    * Mongoose as `Types.ObjectId`
    * Mongoose wants a `ref: 'Model'` attribute to define which 
    model the id refers to.
* NoSQL has multiple ways 
    * Prefer children referencing parent ids
    * How will the child data will be used outside of the parent (if at all)?
        * Put in parent if close, non-seperable relationship
    * Generally handle many-to-many with child array in one of the documents

In class:

1. **DEMO** Review Ripe Banana Lab
1. **EXERISE** Whiteboard Data Models

### Using Mongoose Features with Models

* ObjectId
    * Testing
        ```js
        var id = mongoose.Types.ObjectId();
        ```
* Prefer children referencing parent ids
* ObjectId ref’s
* Sub Documents
    * logical Mongoose constructs
    * don't use unless you really need it
        * Shared sub-document part
        * Break apart very large document
    * Consider shared JS instead
* Discriminators


#### Control Data Retrieval

* Using mongoose `.select` and `.populate`
* Restrict number of results with `.limit()` and `.skip()`
* Mongoose document objects
    * Wrapper around data
    * performance considerations
    * use `.lean()`
    * EXERCISE: Use `select`, `lean` and `populate`

#### Cleaner, Better Organized Code

* Augmenting Models with methods
    * static
    * instance