var http = require('http');
var fs = require('fs');
var adr = require('url');
var qs = require('querystring');
//const MongoClient = require('mongodb').MongoClient;
//const url = "mongodb+srv://alex:scott@cluster0.k60y0.mongodb.net/stocks?retryWrites=true&w=majority"
var port = process.env.PORT || 3000;
//var port = 8080;
console.log("This goes to the console window")
http.createServer(function (req, res) {
    
    if (req.url == "/"){
        file="api-test.html";
        fs.readFile(file, function(err, txt) {
            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write("This is the home page <br>");
            res.write(txt);
            res.end();
        });
    }
    else if (req.url == "/process")
    {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write("<h2> Search Results </h2>");
        res.write("Success! This app is deployed online");
        res.end(); 
      });
      
      });

      
    }
    else {
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.write("Unknown page request");
        res.end();
    }
    
}).listen(port);
