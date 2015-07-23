var fs = require('fs');
var url = require('url');
var path = require('path');
var archive = require('../helpers/archive-helpers');
// require more modules/folders here!
var root = '/Users/student/Desktop/2015-06-web-historian'
//page lookup object for constant time lookup of pages
var page = {};

exports.handleRequest = function (req, res) {
// GET request	
if(req.method==='GET'){
	//gets the pathname from the user requst in URL
	var location = url.parse(req.url).pathname;
	//checks if the pathname is in our DB
	if(location === '/'){
		fs.readFile(root + '/web/public/index.html', function (err, html) {
		//error handling
		if (err) {
			console.log('err: ',err)
			throw err; 
		}
		//write header for successful requests 
		res.writeHeader(200, {"Content-Type": "text/html"})
		//writes parseable HTML to response
		res.write(html.toString(),function(){
			res.end();  
		})
	})
	}
else{
	fs.exists('/Users/student/Desktop/2015-06-web-historian/archives/sites'+location, function(exists){
		console.log('exists: ', exists)
		if(exists){
				//load that page
				fs.readFile('/Users/student/Desktop/2015-06-web-historian/archives/sites'+location, function (err, txt) {
					console.log('its not the root')
					res.writeHeader(200, {"Content-Type": "text/html"})
					res.write(txt.toString(), function(){
						res.end();
					})
				})
				//write the head
			}
			else{
				//404 - fuck off
				console.log('this is the error thing')
				res.writeHeader(404, {"Content-Type": "text/html"})
				res.write('sorry charlie',function(){
					res.end();
				})
			}
		})
	}
}


// POST request
else if(req.method==='POST'){}
  	// read archives/sites.txt 
 //  	console.log('	path is',path)
	// fs.readFile(root + '/archives/sites.txt', 'utf-8', function (err, txt) {
	// 	console.log('text is this: ',txt)
	// })

 //  	req.on('data',function (chunk){
 //  		var text = chunk.toString();
 //  		text = text.split('=')[1];
 //  		if (!text) {
 //  			console.log('text is und')
 //  			res.writeHeader(404, {'Content-Type': 'text/html'})
 //  		}
 //  		if (text) {
 //  		// page[text] sets obj for constant time lookup
 //  			page[text] = (root+'/archives/sites/'+text);
 //  		// writes address to sites.txt
	// 		fs.appendFile(root+'/archives/sites.txt',text+'\n')
	// 	// creates webpage in sites folder
	// 		fs.writeFile(root+'/archives/sites/'+text, ''+text)
	// 	//read contents of webpage
	// 		fs.readFile(page[text], function (err, txt) {
	// 			console.log('txt: ', txt.toString());
	// 			res.write(txt.toString());
	// 		})
 //  			// console.log('text exists and',page[text].toString())
	// 		// req.on('data', function(){
	// 		// })
	// 	}
 //  	})
	// req.on('data', function () {
	// 	res.end();
	// })

 //  	//console.log('siteList ', siteList);
	// }

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

