  var http = require('http');
  var mongo = require("./mongo");
  



  
  //view
  var htmlHeader ='<!DOCTYPE html>\
  <html lang="ja">\
  <head>\
    <meta charset="utf-8">\
    <title>sample</title>\
    <style>\
    </style>\
  </head>\
  <body>';
  
  var htmlContent = 
  '<div class="content">\
    <ul>\
      <li class="item"><img src="__dirname/public/img/cat.jpg" alt=""></li>\
      <li class="item"><img src="public/img/cat.jpg" alt=""></li>\
      <li class="item"><img src="img/cat.jpg" alt=""></li>\
    </ul> \
  </div>';
  var htmlFooter = '</body></html>';
    
  
  //http.server and routing
  var server = http.createServer(onRequest);
  //var req = url.parse(req.url,true);
  function onRequest(req,res){
    if(req.url != "/"){
    res.writeHead(404,{"Content-Type":"text/plain"});
    res.end("error 404:Not Found");
    return;
    }
   
    if(req.url ="/") { 
    res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
    res.write(htmlHeader);
    res.write(htmlContent);
    res.write(htmlFooter);
    console.log(__dirname);
    //console.log(__dirname/public/img/cat.jpg);
    res.end();
    return;
    }
  }
  var PORT = 8080;
  var ADDRESS = "localhost";
  server.listen(PORT,ADDRESS);
  console.log("server running at http://"+ADDRESS+":"+PORT);