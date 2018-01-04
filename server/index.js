const config = require('../config');
const express = require('express');
let router = require('./router');
let app = express();

app.use(express.static(__dirname + '/../client/dist'));
app.use(express.static(__dirname + '/../client/dist/favicons'));
app.use('/', router);

app.listen(config.serverPort, () => {
  console.log(`Example app listening on port ${config.serverPort}`)
});