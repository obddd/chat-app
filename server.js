const express = require('express');
const socketio = require('socket.io');
const http = require('http');
const cors = require('cors');


const app = express();
const server = http.createServer(app);
const io = socketio(server);

const PORT = process.env.PORT || 5000;

app.use(cors());

//Define route
app.use('/', require('./route/api/router'));

io.on('connection', (socket) => {
  console.log('New user has joined.');

  socket.on('join', ({ name, room }, callback) => {
    console.log(name, room)
  })

  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});


server.listen(PORT, console.log(`Server has started on ${PORT}`));
