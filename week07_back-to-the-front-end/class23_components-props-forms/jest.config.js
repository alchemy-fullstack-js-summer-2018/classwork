/* eslint-env node */
module.exports = {
  setupTestFrameworkScriptFile: '<rootDir>/enzyme.setup.js',
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '.+\\.(css|styl|less|sass|scss)$': 'jest-css-modules'
  },
};