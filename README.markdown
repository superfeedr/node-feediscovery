[![build status](https://secure.travis-ci.org/superfeedr/node-feediscovery.png)](http://travis-ci.org/superfeedr/node-feediscovery)
# Feediscovery

A wrapper around [Feediscovery](http://feediscovery.appspot.com/).

## Install:

`npm install feediscovery`

## Usage:

```javascript
var feediscovery = require('./feediscovery.js');

feediscovery('http://thenextweb.com/', function(err, feeds) {
    // Simple, huh!
});
```