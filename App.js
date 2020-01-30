const express = require("express");
const path = require('path');

const app = express();
app.use('/public',express.static(path.join(__dirname,'static')));

app.get("/", (request, response) => {
  response.sendfile(path.join(__dirname,'static','index.html'));
});

app.get("/test", (request, response) => {
  response.send("Your in test route");
});

app.get("/test/:name/:age", (request, response) => {
    console.log(request.query);
  response.send(request.params.name + " : " + request.params.age)
});

app.listen(3005);
