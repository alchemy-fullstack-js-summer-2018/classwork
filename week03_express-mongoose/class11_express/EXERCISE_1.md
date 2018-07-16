1. Install express
2. Use an app.js with listen

Create a `.get` express route the "echos" a summary of what was
requested. Include at least one "dynamic" portion in your path (`/:id`).

```js
{
    path: <the path requested>,
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

## Request

`GET /fruits/123?type=pinklady&size=small`

## Response


```js
{
    "path": "/fruits/123",
    "method: "GET",
    "params": {
        "id": "123"
    },
    "query": {
        "type": "pinklady",
        "size": "small"
    }
}
```