const express = require('express');
const dotenv = require('dotenv')
const initNode = require('./node')

const app = express();
dotenv.config()


// Initialize node & server
console.log('Initializing Lightning node...');
initNode().then(() => {
  console.log('Lightning node initialized!');
  console.log('Starting server...');
  app.listen(env.PORT, () => {
    console.log(`Server started at http://localhost:${process.env.PORT}!`);
  });
});
