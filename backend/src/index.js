const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const dayjs = require('dayjs');
var createError = require('http-errors')

const dbConfig = require('../config/database.config');
const articleRoute = require('../routes/articles.route');


//set db connection
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.url, {
  useNewUrlParser: true
}).then(() => {
  console.log('Database connected')
},
  error => {
    console.log('Database could not be connected : ' + error)
  }
)

const app = express();
dotenv.config();
app.use(helmet());

app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));

const port = process.env.PORT || 3001;

app.use('/articles', articleRoute);

// Index Route
app.get('/', (req, res) => {
  res.json({
    status: true,
    message: 'API responding',
    time: dayjs(Date.now()).format(),
  });
});


app.use((req, res, next) => {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});

  app.listen(port, async () => {
    console.log(`Listening on port ${port}`);
  });

