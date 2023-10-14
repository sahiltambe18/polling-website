const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const dotenv = require('dotenv');
dotenv.config();

const { connectToDatabase, getDb } = require('./Data/db');
const pollRoutes = require('./routes/poll.routes');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

app.use(express.json())

app.use(pollRoutes); 

connectToDatabase()
  .then(() => {
    const PORT = process.env.PORT || 5000;
    server.listen(PORT, () => {
      console.log(`Server is running on port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log('Failed to connect to the database');
    console.log(err);
  });
