You should already have:
1. Install express
2. Use an app.js with listen

Use a `Router` to setup routes for a resource:

1. Create `<resource-name>.js`
2. Create a router:
    ```js
    const Router = require('express').Router;
    const router = Router();
    ```
3. Add primary methods to router (hard code meaningful responses):
    * GET `/things` - `[{ name: 'thing1' }, { name: 'thing2' }]`
    * GET `/things/:id` - `{ name: 'thing' }`
    * POST `/things` - `{ name: 'thing' }`
    * DELETE /things/:id = `{ removed: true }`
4. export `router`
5. require `./things.js` in `app.js`
6. "mount" using `app.use('/things', things);`