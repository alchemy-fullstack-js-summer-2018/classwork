Class 09 MongoDB
===

## Questions and Issues?
    * Lightning Talks for second half

* ?

## Upcoming
* Sign-ups:
    * Will be available for 1-on-1's

## Today's Learning Objectives

* Install and run a local mongodb instance.
* Basic mongodb commands
	* Reading (Finding)
	* Writing (Insert and Update)
    * Use `$` commands
* Use mongodb driver in node.js to expose http rest api

## Agenda

### Distributed Systems

* 3-tier
	* Database
	* Server
	* Client

### MongoDB

#### Install

##### OSX
1. Download `.zip`
1. Extract:
	* double click, **or**
1. Move to home:
	* `> mv ~/Downloads/mongodb-osx-x86_64-3.6.3 ~/`
	* `> mv mongodb-osx-x86_64-3.6.3 mongodb`
1. Add data directory
	* `> mkdir ~/mongodb/data`
1. Add to path to mongo bin in `.bash_profile`:
	* `> export PATH=$PATH:~/mongodb/bin`
1. Test from **new** terminal window:
	* `> mongod --dbpath ~/mongodb/data`
1. Add alias in `.bash_profile`
	* `> alias gomongo="mongod --dbpath ~/mongodb/data"`

##### Windows
1. Download `.msi` and install
1. Add to path:
	* Windows Key then search "path"
	* Open Environment Variables
	* Chose `Path` from **System** Variables and click "Edit"
	* Click "New" and paste path to `C:/Program Files/Mongodb/server/3.6/bin`
1. Add folder(s)
	* `C:\data\db`

#### Tools:

* `mongod` - runs the server
* `mongo` shell - cli client
* Robo 3T (RoboMongo) - graphical client
* `mongodb` node driver - node "driver" library
* `mongoose` ORM library - node library for schemas and data validation

#### NoSQL

* RDBMS vs NoSQL
* Schema vs Schemaless

#### Working with data

* JavaScript FTW!
* `find` (read)
* `ObjectId()`
* `insert`, `update`, `upsert` (write)
	* Use of commands via `$cmd`
	( `$set`, `$push` and `$addToSet`, `$pull`)
* `remove` (delete)
* `aggregate`
* ...

### Integrating with NodeJS and Http Server

* Setup for both:
    * server.js
    * E2E tests
* updated `.travis.yml`