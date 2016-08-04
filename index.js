const express = require('express');
const uuid = require('uuid');


const app = express();

app.get('/', (req, res) => {
  const id = uuid();
  console.log(id, 'connection opened', req.ip, req.headers);
  req.on('close', () => {
    console.log(id, 'connection closed', req.ip, req.headers);
  })
});

app.listen({ path: '/default.sock' });
