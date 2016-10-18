const fs = require('fs');
const path = require('path');
const http = require('http');
const url = require('url');
const querystring = require('querystring');

const httpServer = http.createServer(function(req, res) {

	const parsedUrl = url.parse(req.url);
    	const parsedQuery = querystring.parse(parsedUrl.query);
	

        if (parsedUrl.pathname === '/name') {
		res.statusCode = 200;
		return res.end('Joe');
	}
	if (parsedUrl.pathname === '/req') {
		res.statusCode = 200;
		return res.end(req.url);
	} 	
    	if (parsedUrl.pathname === '/sum') {
        	res.end('' + (parseFloat(parsedQuery.a) + parseFloat(parsedQuery.b)));
        	return;
	}
	if (parsedUrl.pathname === '/age') {
		res.statusCode = 200;
		return res.end('' + (parseFloat(parsedQuery.age)));
	} 
	else {
            res.writeHead(404, 'Not Found');
            res.write('404: File Not Found!');
            return res.end();
        }
    });

httpServer.listen(68);