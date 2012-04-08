var feediscovery = require('./feediscovery.js');

feediscovery('http://thenextweb.com/', function(err, feeds) {
    if(err) {
        throw new Error('There was an error: ' + err.message)
    }
    if(feeds.length != 2) {
        throw new Error('There should be 2 feeds');
    }
    if(feeds[0].href === 'http://feeds2.feedburner.com/thenextweb' || feeds[1].href === 'http://feeds2.feedburner.com/thenextweb') {
        if(feeds[0].href === 'http://feeds2.feedburner.com/thenextwebtopstories' || feeds[1].href === 'http://feeds2.feedburner.com/thenextwebtopstories') {
            console.log("win!");
        }
        else {
            throw new Error('Missing the feed http://feeds2.feedburner.com/thenextwebtopstories');
        }
    }
    else {
        throw new Error('Missing the feed http://feeds2.feedburner.com/thenextweb');
    }
});