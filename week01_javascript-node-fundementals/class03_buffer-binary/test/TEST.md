# Class 03 Buffer and Binary Data

## Questions and Feedback

* This is all normal (and [it works](grads.png))...
* Improving pace: reduce cycle time when "you don't know"
    * No one is coming to save you :(
    * You are not expected to know :)
    * Your insights ("not knowings") are valuable!
    * You are expected to own it, be proactive, and advocate:
        * Narrow down the scope of what it is you don't know
        * Define what it is you need?
        * Use peers and TAs
* Do your learning in public (within alchemy)
    * Requisite for above items
    * Use first 30 minutes of class
* Remove code noise:
    * Copied class code left in labs
    * Remove pseudo-code comments
* Read your own code more (when you think you are "done")
    * Think about what choices exist
    * Ask for others to review
* ?

## Learning Objectives

* Explain what binary data means
* Ditto Hex
* Read, write, and manipulate encoded binary data using the Buffer class
* Continue focusing on library design...

## Non-decimal Numbers

Other bases... What is a base?

* Places
* Digits

## JavaScript numbers

* Binary: `0b01001101`
* Hex: `0x4D`

## Binary Data and Buffer

### Binary Data

* What is meaning?
* Bits, Bytes, Words, DWords
* BE LE "Endianness" byte order
* signed/unsigned
* "encoding"
* "serialization"/"deserialization"

### Meet `Buffer`

* Data managed outside of JavaScript
* Binary representation
* Stored in Heap memory
* Buffers access this memory
* I/O methods
* Beware of the number constructor
* Binary Data

**DEMO:** "eff'n file"

### Hexadecimal and Tools

* Lots of free editors - `iHex`
* What is Hexadecimal?
* Why does it fit well with binary?

## Reading and writing a file

* Sychronous read and write
