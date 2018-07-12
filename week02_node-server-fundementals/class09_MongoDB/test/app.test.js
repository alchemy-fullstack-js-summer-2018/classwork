require('dotenv').config({ path: './test/.env' });
const mongo = require('../lib/mongodb');
const chai = require('chai');
const chaiHttp = require('chai-http');
const app = require('../lib/app');

chai.use(chaiHttp);
const { assert } = chai;


describe('Pirates API', () => {

    before(() => {
        return mongo.then(db => {
            db.collection('pirates').remove();
        });
    });

    let pirate = {
        name: 'Monkey D. Luffy',
        crew: 'Straw Hats'
    };

    it('saves a pirate', () => {
        return chai.request(app)
            .post('/pirates')
            .send(pirate)
            .then(({ body }) => {
                assert.ok(body._id);
                assert.equal(body.name, pirate.name);
                pirate = body;
            });
    });

    it('gets pirates', () => {
        return chai.request(app)
            .get('/pirates')
            .then(({ body }) => {
                assert.deepEqual(body, [pirate]);
            });
    });

    after(() => mongo.client.close());
});
