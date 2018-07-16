1. Install express
2. Use an app.js with listen

Create a GET express route the "echos" a summary of what was
requested. Include at least one "dynamic" portion in your path (`/:id`).

```js
{
    url: <the url requested>,
    method: <the http method>,
    params: {
        <key>: <value>
    },
    query: {
        <key1>: <value1>,
        <key2>: <value2>
    }
}
```