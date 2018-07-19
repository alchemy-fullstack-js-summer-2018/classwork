# Class 14 Model Relationships

## Questions and Issues?

* ?


## Today's Learning Objectives

* Create related data models based on data usage patterns using mongoose schema options.
* Control json using mongoose `select()`, `populate()`, and `lean()`
* (Time allowing: Consolidate business logic in models using static and instance mongoose model methods)

## Agenda

### Model

#### Data Relationships

* one to one
* one to many
    * Intra-document
    * Separate document
* many to many

#### Related Models

* ObjectId
* Prefer children referencing parent ids
* ObjectId ref’s
* **EXERISE** Whiteboard Data Models
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