# co-mkdirp
a promised wrapper for mkdirp

### Installing

```
npm install co-mkdirp
```

### Usage



```
var co = require('co');
var mkdirp = require('co-mkdirp');

co(function* (){
    var path = 'test/test';
    yield mkdirp(path);
}).catch(function(err){
    console.log(err.stack);
})

```
