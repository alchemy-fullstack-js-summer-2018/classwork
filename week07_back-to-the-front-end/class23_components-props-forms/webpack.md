Webpack From Scratch
===

Webpack is a module bundler for JS applications. It compiles modern JavaScript applications into bundles that can be loaded into a browser. **All of your projects' assets should be managed by webpack**, including JSON, JS, CSS, SCSS, HTML, IMAGES, FONTS, etc.

## Webpack Terminology

### Loaders

Loaders are involved on `import`/`require`.

Loaders can be added to webpack to transform the data (code/json/images/etc.) imported into a project. Loaders are configured to only apply their transformations to files that match user defined regular expressions. Loaders can be chained together to transform data. Some examples include...

* Transform ES6 files into ES5 files with Babel
* Transform SCSS files into CSS files
* Transform images/fonts into base64 data embedded into your SASS/CSS

### Plugins

Plugins do additional work outside of tree. Some plugins are used in conjunction with loaders (`Extract Text`)

Plugins can be added to webpack to add extra functionality. Some examples include...

* Creating HTML files with dynamic script and link tags
* Creating CSS files
* Uglifying and minifying your code
* Creating project global vars at compile time

## Setup

### `package.json`

1. `npm init` to create `package.json`

### Basic Build Setup

1. `npm i webpack webpack-cli -D`
1. Create `webpack.config.js` (see example)
1. Specify:
    * entry module
    * destination
1. Run `npx webpack` to create bundle.js
1. Success? Add to `package.json` as `build`

### Add Clean Webpack Plugin

Remove old bundle files by cleaning them when build

1. `npm i clean-webpack-plugin -D`
1. Add to `plugins` section of `webpack.config.js`
    ```js
    plugins: [
        new CleanWebpackPlugin(`${path}/bundle.*.js`), 
    ],
    ```

### Use HTMLWebpackPlugin

1. `npm i html-webpack-plugin -D`
1. Add `HTMLPlugin` to `webpack.config.js`
1. Add `index.html` to `src` that has an `id="root"` target element
1. Change config of `HTMLPlugin` to use that file
1. Restart and verify that it works!

### Dev Server

**NOTE: You will need to restart webpack _whenever_ config changes!!!**

1. `npm i webpack-dev-server -D`
1. Add "docs" as `devServer/contentBase` to `webpack.config.js`:
    ```js
    devServer: {
        contentBase: './docs',
    },
    ```
1. Run `npx webpack-dev-server`
1. Success? Add to `package.json` as `start`
1. Commit

### Add `babel` for ESNext

1. `npm i babel-core babel-loader babel-preset-env babel-plugin-transform-class-properties babel-plugin-transform-object-rest-spread -D`
1. Add `options` to loader in `webpack.config.js`, _or_ add `.babelrc`:
    * presets for last two browser versions, or chrome 60, etc, and 
    * plugins for class properties and object-rest-spread
    * caching
1. Add `rule` to `webpack.config.js` for loading `.js` with babel
1. Try `npm start`
1. Restart and verify that it works!
1. Commit

### Add sourcemaps FTW!

```js
devtool: 'inline-source-map',
```

### Add React

1. `npm i react react-dom`
1. `npm i babel-preset-react -D`
1. Add `'react'` to options (or `.babelrc`) presets
1. Change code to render some react jsx to `document.body`
1. Restart and verify that it works!

### Change `eslint` to better work with `react` and `babel`

1. `npm i babel-eslint eslint-plugin-babel eslint-plugin-react -D`
1. Refer to class example for setup of `.eslintrc`. Main changes:
    1. Extend react plugin:

        ```json
        "extends": [
            "eslint:recommended",
            "plugin:react/recommended"
        ]
        ```
    2. Use `babel` parser and plugin, change `parserOptions` and `env`:

        ```json
        "parser": "babel-eslint",
        "parserOptions": {
            "ecmaVersion": 9,
            "sourceType": "module",
            "ecmaFeatures": {
                "module": true,
                "jsx": true
            }
        },
        "env": {
            "es6": true,
            "browser": true,
            "jest": true
        },
        "plugins": [
            "babel"
        ],
        ```
    3. Add babel-specific rules:
        ```json
         "rules": {
            //...
            "babel/object-curly-spacing": ["error", "always"],
            "babel/no-invalid-this": 1,
            "babel/semi": 1
        }
        ```



### Add `css` with style loader

1. `npm i css-loader style-loader postcss-loader autoprefixer precss postcss-import -D`
1. Add `postcss.config.js` with autoprefixer and precess:
    ```js
    /* eslint-env node */
    module.exports = {
        plugins: [
            require('postcss-import'),
            require('precss'),
            require('autoprefixer')
        ]
    };
    ```
1. Add a loader to rules
1. Add a css file
1. Restart and verify it works!