var urlparser = require('url'),
    http = require('http'),
    querystring = require('querystring');

var options = {
    host: 'feediscovery.appspot.com',
    path: '/',
    method: 'GET',
    headers: {
        'Accept': 'application/json',
    }
};


module.exports = function(u, cb) {
    var body = "";
    var qs = querystring.stringify({ url: u });
    options.path = '/?' + qs;
    var req = http.request(options, function(res) {
        if(res.statusCode === 200) {
            res.on('data', function (chunk) {
                body += chunk;
            });
            res.on('end', function() {
                cb(null, JSON.parse(body));
            })
        }
        else {
            cb({name: 'HTTPError', message: 'The webservice returned ' + res.statusCode }, []);
        }
    });
    req.on('error', function(error) {
        cb({name: 'HTTPError', message: 'We could not connect.'}, []);
    });
    
    req.end();
};