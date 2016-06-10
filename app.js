  var http = require('http');
  var url = require('url');
  var fs = require('fs');
 // var mongo = require("./mongo");/home/s14196to/CNSiMac/Desktop/node/Eview/app.js





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
      <li class="item"><img src="img/caat.jpg" alt=""></li>\
    </ul> \
   </div>';

  var htmlFooter = '</body></html>';


  //http.server and routing
  var server = http.createServer(onRequest);
  function onRequest(req,res){
    var request = req.url;
    var recon = request.split(".");
    var show = recon[0];
    console.log(recon[0]);
    var acrion = request.parse
    //console.log(req.url);
    if(req == null){
    res.writeHead(404,{"Content-Type":"text/plain"});
    console.log("error");
    res.end("error 404:Not Found");
    return;
    }

    if(req.url =="/") {
    console.log("cathy");
    res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"});
    res.write(htmlHeader);
    res.write(htmlContent);
    res.write(htmlFooter);
    res.end();
    console.log("betty");
    return;
    }
    console.log("Elly");

    if(show == "/img/caat"){
    console.log("amanda");
    res.writeHead(200,{"Content-Type":"image/jpeg"});
    var img = fs.readFileSync('./img/caat.jpg');
    res.write(img);
    console.log("fulora");
    res.end();
    return;
    }

  }
  var PORT = 8080;
  var ADDRESS = "localhost";
  server.listen(PORT,ADDRESS);
  console.log("server running at http://"+ADDRESS+":"+PORT);
