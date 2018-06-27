/* eslint-disable */

const pseudoStore = {
    save(object) {
        // add an id;

        // do file write
        fileWrite(/*...*/)
            .then(() => {
                return object;
            })
    }
}

let hero = {
    name: 'All Might',
    power: 'One for All'
};

beforeEach(() => {
    return store.save(hero)
        .then(saved => hero = saved);
})

it('gets a saved object', () => {
    return store.get(hero._id)
        .then(got => {
            // test
        })
});

it('updates a saved object', () => {
    hero.power = 'new power';
    return store.update(hero)
        .then(updated => {
            // test
        })
})

it('saves and gets an object', () => {
    const hero = {
        name: 'All Might',
        power: 'One for All'
    };

    return store.save(hero)
        .then(saved => {
            assert.ok(saved._id);
            return store.get(saved._id);
        })
        .then(got => {
            assert.equal(got.name, hero.name);
            assert.equal(got.power, hero.power);
        });
});

it('updates an object', () => {
    const hero = {
        name: 'All Might',
        power: 'One for All'
    };

    store.save(hero)
        .then(saved => {
            saved.power = 'Retirement Fun';
            return store.update(saved);
        })
        .then(updated => {
            return store.get(updated._id);
        })
        .then(got => {
            assert.equal(got.power, 'Retirement Fun');            
        });
});

it('returns null when given bad id', () => {
    return store.get('bad')
        .then(result => {
            assert.equal(result, null);
        });
});