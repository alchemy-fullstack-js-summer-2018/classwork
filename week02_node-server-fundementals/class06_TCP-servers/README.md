Class 06: TCP Servers
===

## Feedback/Questions

* Surveys
    * Please respond! (11/14)
    * First week was hard (normal)
    * People appreciated direction in labs
    * "Reading Assignment" responses
* Review upcoming week
* Code as Thinking
* Bitmap?

## Today's Learning Objectives

1. Write and run and TCP server with Node.js
1. Write and run a TCP client
1. BONUS: `readline`

### Layers (Reference)

* [Networking layers](https://drawings.jvns.ca/layers/)
* [Packets](https://drawings.jvns.ca/packet/)
* [DNS](https://drawings.jvns.ca/dns/) (see also https://howdns.works/ep1/)
* [TCP](https://drawings.jvns.ca/tcp-1/)
* [OSI vs TCP/IP Model](http://www.tcpipguide.com/free/diagrams/tcpiplayers.png)
* [OSI Model](http://blog.buildingautomationmonthly.com/wp-content/uploads/2013/05/OSI-Model.png)

## Agenda

### Distributed Systems FTW!

* Server
* Client
* Process
* Port
* Socket

### Review

* Streams
    * as event emitters:
        * `on`: `data` and `close`
    * `write`
* Files as streams
    * Demo `fs.createReadStream()`
* (re)introducing: `pipe`

### TCP

#### Long-lived streams over sockets

* EventEmitter for connecting sockets
* call `listen` to start listening
* Emits "client sockets"
    * Duplex streams (read and write)
    * event emitter
        * `on`: `data` and `close`
    * `write`

#### Server

* Standard server project
* Demo

#### Client

* Demo
* `readLine`