Frontend 01: Tooling (Webpack) and React
===

## Learning Objectives

* Students will be able to configure webpack to build a web application bundle
* Students will be able to configure webpack dev server to serve the app in development
* Students will be able to configure babel to transpile JSX and ES6 to ES5 JavaScript
* Students will be able to configure postcss to transpile enhanced CSS to CSS
* Students will be able to create and render React components to the DOM
* Students will be able to add event listeners to React elements
* Students will be able to update React component state
* Students will pass props to functional components from a React component

## Agenda

* Modern Frontend Development
* Build System with Webpack
* Intro to React

## Background

### Single Page Applications

* View changes are programmatic, browser not refreshing
* Talk to servers
* Library/Framework in charge (no html we "attach to")

### Frontend Libraries and Frameworks

* What do they do?
    * Render and Manipulate the DOM
        1. Text nodes
        1. Element properties
        1. Blocks (multiplicity)
* But what do they help me do?
    * Keep the DOM up to date
    * Respond to user interactions
* Reactive programming
    * Offer developers API for declaring or describing:
        * how the data and html should be combined (interpolation)
        * data changes
    * Syncing data to UI happens "automagically"
* JavaScript (, HTML, CSS)
    * New language features
    * Optimizations and other production enhancements
    * Requires a build system
    * Requires a server to run development
* End result for "Modern Front End Development":
    1. Amount and complexity of programming logic for the app is great
        * Advanced JavaScript
        * Modularity and Organization
    1. Build system layer
        1. Transpile
        1. Package
        1. Serve
    1. Application layer
        * React offers a whole new paradigm

## Environment Changes

* ES6 Modules
* Switch to 2 space indentation
* Use `src` (not `lib`) for all source assets (html, css, js)

## Webpack

[Webpack details](webpack.md)

## Review destructuring

* Object properties

## React

React is a component based view and state management library. It's designed to be declarative, making it "painless" to create interactive UIs. React can run in browsers and natively on mobile devices.

### Components

React components have a render method that returns a view to be rendered to the page. React developers use JSX to make their applications more readable and have a more expressive workflow when writing React views. JSX looks like HTML, but gets transpiled to ordinary JavaScript `React.createElement()` invocations by Babel. 

React components can also have `state` and `life cycle hooks`. When the state of a React component bound to a view changes, the view will automatically re-render itself, eliminating the pain of manual DOM manipulation under most circumstances. React components can implement specific methods that will get called at specific points. These are called life cycle hooks.

React components can also pass data into their children through what is called one way data binding. We say that React applications have one-way data flow, because data is only passed from the top down.