import express from 'express';
import uuid from 'uuid';


const app = express();

app.get('/', (req, res) => {
  const id = uuid();
  console.log(id, 'connection opened', req.ip, req.headers);
  req.on('close', () => {
    console.log(id, 'connection close', req.ip, req.headers);
  })
})
