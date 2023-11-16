const express = require('express');

const app = express();

app.use('*', (req, res) => {
  console.log('Request form browser');
  res.send('<h1>This is HTML response</h1>');
});

const listener = app.listeners(4444, () => {
  console.log(`Web-server has been launched on port ${listenr.address().port}`);
});
