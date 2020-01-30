const express = require('express');
const app = express();

app.get('/',(request,response)=>{
response.send('Hello from Express server');
});

app.listen(3005);