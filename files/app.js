const fs = require("fs");

// fs.readFile("hello.txt","utf-8", 
//     function(error,data){
//         console.log("Async read");
//         if (error) throw error;
//         console.log(data);
// })

// console.log("Sync read");
// let fileContent = fs.readFileSync("hello.txt", "utf-8");
// console.log(fileContent);

// fs.writeFile("hello.txt", "Hello мир 1!", function(error){
//     if (error) throw error;
//     console.log("Async file saved. Content:");
//     let data = fs.readFileSync("hello.txt", "utf-8");
//     console.log(data);
// })

fs.appendFileSync("hello.txt", "Привет ми ми ми!");

fs.appendFile("hello.txt", "Привет МИД!", function(error){
    if (error) throw error;
    console.log("Async file saved. Content:");
    let data = fs.readFileSync("hello.txt", "utf-8");
    console.log(data);
});