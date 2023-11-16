"use strict";

var express = require('express');
var app = express();
app.use('*', function (req, res) {
  console.log('Request form browser');
  res.send('<h1>This is HTML response</h1>');
});
var listener = app.listeners(4444, function () {
  console.log("Web-server has been launched on port ".concat(listenr.address().port));
});