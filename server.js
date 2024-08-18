const express = require("express");
const path = require("path")
const app = express()

app.use(express.json());

app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

const linkRoute = require('./router/links');
const serverRoute = require('./router/server_info');

app.use('/link', linkRoute);
app.use('/server', serverRoute);

app.listen(3000)