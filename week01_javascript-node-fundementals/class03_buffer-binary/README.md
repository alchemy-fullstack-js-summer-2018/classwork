# Class 03 Buffer and Binary Data

## Questions and Feedback

* Reduce cycle time when "you don't know"
    * No one is coming to save you :(
    * You are not expected to know :)
    * You are expected to own, be proactive, and advocate:
        * Narrow down the scope of what it is you don't know
        * Define what it is you need?
        * Use peers and TAs
* Remove code noise:
    * class code left in labs
    * Remove pseudo-code comments
* ?

## Learning Objectives

* Explain what binary data means
* Ditto Hex
* Read, write, and manipulate encoded binary data using the Buffer class
* Continue focusing on library design...

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
