const { assert } = require('chai');
const request = require('./request');
const { execSync } = require('child_process');
const { join } = require('path');
const mongoose = require('mongoose');

const checkOk = res => {
    assert.equal(res.status, 200, 'expected 200 http status code');
    return res;
};

const filename = join(__dirname, 'restaurant-dataset.json');

describe.only('Restaurant API', () => {

    beforeEach(() => {
        const cmd = `mongoimport --db ${mongoose.connection.name} --collection restaurants --drop --file ${filename}`;
        execSync(cmd);
    });

    it('works', () => {

    });

});
