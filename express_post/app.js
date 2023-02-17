const express = require("express");
const app = express();

const urlencodedParser = express.urlencoded({extended: false});

app.get("/", function (request, response) {
    response.sendFile(__dirname + "/index.html");
});

app.post("/", urlencodedParser, function (request, response) {
    if(!request.body) return response.sendStatus(400);
    console.log(request.body);
    response.send(`${request.body.userName} - ${request.body.userAge}`);
});

app.get("/products/", function (request, response) {
    response.send("<h1>Продукты?</h1>")
});

app.get("/products/:productId", function (request, response) {
    response.send("productId: " + request.params["productId"])
});

app.listen(3000, ()=>console.log("Сервер запущен..."));