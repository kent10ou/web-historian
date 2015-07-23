var fs = require('fs');
var url = require('url');
var path = require('path');
var archive = require('../helpers/archive-helpers');
// require more modules/folders here!
var root = '/Users/student/Desktop/2015-06-web-historian'

exports.handleRequest = function (req, res) {
// GET request	
	if(req.method==='GET'){
		//following functoin turns index into parseable HTML
		var read = fs.readFile(root + '/web/public/index.html', function (err, html) {
	//error handling
	if (err) {
		console.log('err: ',err)
		throw err; 
	}
	//write header for successful requests 
	res.writeHeader(200, {"Content-Type": "text/html"})
	//writes parseable HTML to response
	res.write(html.toString())
	res.end();  
		})
	}
  	
// POST request
  	if(req.method==='POST'){
  	// read archives/sites.txt 
  	req.on('data',function (chunk){
  		var text = chunk.toString();
  		console.log(text = text.split('=')[1]);
  	})
	fs.readFile(root + '/archives/sites.txt', function (err, txt) {
		// console.log('txt: ', txt.toString())	
	})

	}

};





/*
process.stdin.on('data', function(chunk) {
    lines = chunk.split("\n");

    lines[0] = lingeringLine + lines[0];
    lingeringLine = lines.pop();

    lines.forEach(processLine);
});

process.stdin.on('end', function() {
    processLine(lingeringLine);
});
*/

