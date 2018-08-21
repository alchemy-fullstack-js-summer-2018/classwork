/* eslint-env node */
module.exports = {
  roots: ['..'],
  setupTestFrameworkScriptFile: '<rootDir>/enzyme.setup.js',
  transform: {
    '^.+\\.jsx?$': 'babel-jest'
  },
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$': '<rootDir>/fileMock.js',
    '.+\\.(css|styl|less|sass|scss)$': 'identity-obj-proxy',
  },
};