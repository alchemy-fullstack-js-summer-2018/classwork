Three JavaScript Function Passing Patterns
===

### "Functional" programming

```js
array.map(x => x * x);
```

* synchronous 
* happens `0` to `n` times

### Aynchronous "callbacks"

```js
fs.readFile('foo.txt', (err, buffer) => {...});
```

```js
client.query('SELECT * FROM table')
    .then(results => /* ... */);
```

* asynchronous 
* happens once and only once
* __Promises only apply to this category__

### Event emitters

```js
http.createServer((req, res) => {...});

app.get('/foo', (req, res) => {...});

element.addEventListener('click', event => {...});

$('div').click(event => {...});
```

* (sync to ) asynchronous (observers)
* `0` to `n` times in time