const fs = require("fs");
const http = require("http");

http.createServer(async (request, response) => {
    // if (request.url === "/user") {
    //     let data = "";
    //     request.on("data", chunk => {
    //         data += chunk;
    //     });
    //     request.on("end", ()=> {
    //         console.log(data);
    //         response.end("Data received!");
    //     });
    // } else {
    //     fs.readFile("index.html", (error, data) => response.end(data));
    // }

    if (request.url === "/user") {
        const buffers = [];

        for await (const chunk of request) {
            buffers.push(chunk);
        }

        const user = JSON.parse(Buffer.concat(buffers).toString());
        console.log(user.name,"-", user.age);
        response.end("Data received!");
    } else{
        fs.readFile("index.html", (error, data) => response.end(data));
    }
}).listen(3000, ()=>console.log("Server online!"));