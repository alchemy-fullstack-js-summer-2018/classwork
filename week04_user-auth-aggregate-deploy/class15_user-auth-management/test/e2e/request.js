const { createServer } = require('http');
const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const { assert } = chai;

const app = require('../../lib/app');
const server = createServer(app);
const request = chai.request(server).keepOpen();
request.checkOk = res => {
    assert.equal(res.status, 200, 'expected 200 http status code');
    return res;
};

after(done => server.close(done));

module.exports = request;