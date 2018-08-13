# Class 21: Back to the Front End

![bttfe](back-to-front-end.jpg)

## Agenda 

* Backend Review
* JavaScript Foundations
* The DOM
* Component Architectures

## Backend Review

Excellent commitment and execution:

> Being a software developer means doing what you can with the knowledge and resources you have available to you

Mostly [high-level design and architecture issues](mid-project-review.md)

## Commitment

Commit to focus on:

1. Process - Incremental
1. Practice - Hands on keys typing. Code fearlessly
1. Product - Maintainable, quality, clean code

[Professional Software Development](professional-sw-development.md)

### Path to the Darkside

> For training, focusing on "getting it to work" and "knowledge acquisition" _leads to anger and frustration_. Work without regard to process and product and forever will technical debt rule your destiny

## Front End Changes

1. Use 2 spaces
1. Use `camelCase` file and folder names, and `TitleCase` for files
that export components.

## JavaScript

Develop a working model of JavaScript:

1. How Values are Stored
1. How Prototypical Inheritance Works
1. (BONUS: How Scope Works)
1. Event Loop in the Browser
    1. Reentrant code

## DOM Manipulation

There are three kinds of DOM changes:

1. Changing the value of text nodes (done via `.data` on a text node
directly, often done via `.textContent` of wrapping element);
1. Setting a property or calling a method on an element
    * `el.disabled = true`
    * `el.classList.add('showing');`
    * `el.addEventListener('click', listener);`
    * `el.style.display = 'none';`
1. Controlling and changing the multiplicity of blocks of DOM
    1. Conditional - show or remove a block of DOM
    1. Repeated - repeat a block of DOM, splice a block of DOM

## Component Architectures

[Component Architectures](component-architectures.md)

## Lab

* Set user settings tab size to `2`
* Use updated `.eslintrc`

Review today's lab...