const express = require('express');
const app = express();

app.get('/',(request,response)=>{
response.send('Hello from Express server');
});

app.get('/test',(request,response)=>{
    response.send('Your in test route');
    });

app.listen(3005);