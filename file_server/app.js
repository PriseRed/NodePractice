const http = require("http");
const fs = require("fs");

http.createServer(function(request, response){
    console.log(`Запрошенный адрес: ${request.url}`);
    if (request.url == "/") {request.url = "/index.html";}
    const filePath = request.url.substr(1);
    
    // fs.access(filePath, fs.constants.R_OK, err => {
    //     if(err){
    //         response.statusCode = 404;
    //         response.end("Not found!");
    //     } else {
    //         fs.createReadStream(filePath).pipe(response);
    //     }
    // });

    fs.readFile(filePath, function(error, data){
        if(error){
                  
            response.statusCode = 404;
            response.end("Resourse not found!");
        }   
        else{
            response.end(data);
        }
    });
}).listen(3000, function(){
    console.log("Сервер запущен!");
})