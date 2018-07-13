const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);

const app = require('../lib/app');

const request = chai.request(app).keepOpen();

after(() => request.close());

module.exports = request;