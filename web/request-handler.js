
var fs = require('fs');
var url = require('url');
var path = require('path');
var archive = require('../helpers/archive-helpers');
// require more modules/folders here!

exports.handleRequest = function (req, res) {
  if(req.method==='GET'){
  	//console.log ('fs',fs) //to see if it is what we think it is
  	//console.log('fs.readFile', fs.readFile) //to see if it is a function
  		var read = fs.readFile('/Users/student/Desktop/2015-06-web-historian/web/public/index.html', function (err, html) {
    	console.log('html',html.toString()) //to see what this gives us
    	fs.createReadStream('/Users/student/Desktop/2015-06-web-historian/web/public/index.html');

    	if (err) {
    		console.log('err: ',err)
       		throw err; 
    	} 
    	res.writeHeader(200, {"Content-Type": "text/html"})
    		res.write(html.toString())
        res.end();  
		})
  	}
  if(req.method==='POST'){
  	//do somethinga
  	console.log('got this request')
	//res.end(archive.paths.list);
	}

};
