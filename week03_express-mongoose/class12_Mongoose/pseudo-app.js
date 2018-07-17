const app = {};


const auth = require('./routes/auth');
const animals = require('./routes/animals');
const keepers = require('./routes/keepers');
const zoos = require('./routes/zoos');

app.use('/api/auth', auth);
app.use('/api/animals', ensureAuth, animals);
app.use('/api/keepers', ensureAuth, keepers);
app.use('/api/zoos', ensureAuth, zoos);
