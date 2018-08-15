Frontend 02: Tooling (Webpack) and React
===

## Learning Objectives

## Agenda

* Modern Frontend Development
* Build System with Webpack
* Intro to React

## Instantiate a React Component (Birds and the Bees of Parent/Child Components)

### Element/Attribute Syntax

Think of:

```js
<MyComponent foo={foo} bar="BAR" onQux={this.handleQux}/>
```

As:

```js
const myComponent = new MyComponent({
  foo: foo,
  bar: 'BAR',
  onQux: this.handleQux
});
```

### But...

* Components are not "re"-rendered just because prop/state changes
* You can control with `key` if necessary

## State and Props

* Rules of state
    * Push state a far down as possible
    * Sibling components that share state? Must live in common ancestor
* Passing functions as actions
    * "events up"
* Props are state (or props) passed from a parent component
    * Child components **never** modify props directly
    * Nothing above a component that has state should set 
    that state.
    * Though there is something called "derived state from props". Example: component is passed an id, and calls an
    API to get that entity
* And while we are mentioning it:
    * Never set `state` outside of constructor
    * Never call `setState` during _synchronous_ part of `render()`
    * Use `setState(fn)` when using previous state

## Testing

### PropTypes

Set expectations for component props. Results in warnings
on the console. Development only, not run during `production` mode.

```sh
> npm i prop-types
```

[React Docs on PropTypes](https://reactjs.org/docs/typechecking-with-proptypes.html)


### Install

```sh
> npm i jest jest-css-modules enzyme enzyme-adapter-react-16 enzyme-to-json -D
```

Primary tools:

1. `jest` - test runner and assertion library
1. `enzyme` - utility for working with components in tests

### `jest`

OSS from facebook. Instructions:

```sh
> npm i jest jest-css-modules -D`
```

In `package.json` add the following scripts:

```json
  "scripts": {
    
    "test": "jest",
    "test:watch": "npm run test -- --watch",
  },
```

NOTE: In a non-git project, you would need to use `--watchAll` as `--watch` uses
git status

### `enzyme`

Enzyme is an OSS from airbnb used to help test React components.

Installing and configuring `enzyme` takes a bit of setup:

1. Install:
    ```sh
    > npm i enzyme enzyme-to-json enzyme-adapter-react-16 -D
    ```
1. Configure. In order to configure `enzyme` to use the `react 16` adapter,
we need to configure jest to run a setup file that in turn registers the 
adapter:
    1. Add a `jest.config.js` file at the root of your project:
        ```js
        /* eslint-env node */
        module.exports = {
            setupTestFrameworkScriptFile: '<rootDir>/enzyme.setup.js',
            transform: {
                '.*': '<rootDir>/node_modules/jest-css-modules'
            }
        };
        ```
    2. Add a `enzyme.setup.js` file at the root of your project:
        ```js
        import Enzyme from 'enzyme';
        import Adapter from 'enzyme-adapter-react-16'`;

        Enzyme.configure({ adapter: new Adapter() });`
        ``

Enzyme is a utility designed to ease the testing of react components. It provides several methods for compiling/rendering components:

* `shallow(<Component />)` - shallow rendering is useful to test a component without indirectly asserting behavior of child components
* `render(<Component />)` - static rendering is used to render components to static html (text) and analyze the resulting HTML structure
* `mount(<Component />)` - full rendering is ideal when your components interact with DOM APIs

## API Services

* Own folder
    * file per resource
    * or single api if few resources
* Encapsulate calls based on resource
* Isolate components from http or other communication configuration


## Forms

### Controlled vs Uncontrolled

> Where should the state live?

1. In the DOM - good for "event emitting" components
1. In `state` - data is needed in multiple places

Generally, #2 is easier

### Bonus table of Form events

Element	| Value property | Change callback | New value in the callback
---|---|---|---
`<input type="text" />`|`value="string"`|`onChange`|`event.target.value`
`<input type="checkbox" />`|`checked={boolean}`|`onChange`|`event.target.checked`
`<input type="radio" />`|`checked={boolean}`|`onChange`|`event.target.checked`
`<textarea />`|`value="string"`|`onChange`|`event.target.value`
`<select />`|`value="option value"`|`onChange`|`event.target.value`