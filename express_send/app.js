const express = require("express");
const app = express();

app.use((request, response) => {
    response.sendFile(__dirname + "/index.html");
});

app.listen(3000);