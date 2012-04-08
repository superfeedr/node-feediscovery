# Feediscovery

A wrapper around Feediscovery.

## Install:

`npm install feediscovery`

## Usage:

```javascript
var feediscovery = require('./feediscovery.js');

feediscovery('http://thenextweb.com/', function(err, feeds) {
    // Simple, huh!
});
```