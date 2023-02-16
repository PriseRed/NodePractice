const fs = require("fs");

let readableStream = fs.createReadStream("hello.txt","utf-8");

let writeableStream = fs.createWriteStream("copy2.txt");

// readableStream.on("data", function(chunk){
//     writeableStream.write(chunk);
// })

readableStream.pipe(writeableStream);