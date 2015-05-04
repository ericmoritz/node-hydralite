# node-hydralite

An implementation of [Hydra
Lite](http://eric.themoritzfamily.com/hydra-lite.html) using
jsonld-dsl. Hydra Lite is just enough JSON-LD and Hydra for bolting on
hypermedia to existing services.


## Usage

It should be fairly easy to bolt-on Hydra lite support to your
existing services.

Let us take for example a view that is returning the data
for a blog:

```js
function view(req, res) {
  var blog = db.getBlog()
  blog.entries = db.getEntries()
  return res.json(blog)
}
```

And the JSON looks like this:

```json
{
  "name": "Eric Moritz" Blog",
  "entries": [
    {
      "url": "http://eric.themoritzfamily.com/hydra-lite.html",
      "name": "Hydra Lite"
    }
  ]
}
```

To adding Hydra Lite support is easy, just wrap the resources in
a `Resource()` call and add the additional properties.

```js
function entryToResource(entry) {
  return Resource(
     URI('/entries/' + entry.key),
     type('BlogEntry'),
     entry
  )
}

function view(req, res) {
  var blog = db.getBlog()
  blog.entries = db.getEntries()

  return res.json(
    Resource(
      URI('/'),
      type('Blog'),
      blog,
      {'entries': blog.entries.map(entryToResource)}
    )
  )
}
```

This would produce the following JSON:


