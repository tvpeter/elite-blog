const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const { startDatabase } = require('./database/mongo');
const { insertArticle, getArticles, deleteArticle, updateArticle, getArticle  } = require('./database/articles');
const dotenv = require('dotenv');


const app = express();
dotenv.config();
app.use(helmet());

app.use(bodyParser.json());
app.use(cors());
app.use(morgan('combined'));

const port = process.env.PORT || 3001;


app.get('/', async (req, res) => {
  const articles = await getArticles();
  res.status(200).json({
      status: true,
      message: 'Articles retrieved successfully',
      data: articles,
  });
});

app.post('/', async (req, res) => {
  const article = req.body;
  const insertedArticle = await insertArticle(article);

  res.status(201).json({
      status: true,
      message: 'Article created successfully',
      data: {
        id: insertedArticle,
      }
  })
});

app.delete('/:id', async (req, res) => {
  const id = await deleteArticle(req.params.id);

  res.status(200).json({
    status: true,
    message: 'Article deleted successfully',
    data: {
      id: id,
    }
  })
});

app.put('/:id', async (req, res) => {
  const updatedArticle = req.body;
  const article = await updateArticle(req.params.id, updateArticle);

  res.status(200).json({
    status: true,
    message: 'Article updated succcessfully',
    data: {
      article: article,
    }
  })
});

app.get('/:id', async (req, res) => {
  const article = await getArticle(req.params.id)
  res.send(article);
})

// start the in-memory MongoDB instance
startDatabase().then(async () => {

  await insertArticle({
    title: 'Hello, now from the in-memory database!',
    body: 'This is the body of the request'
  });

  app.listen(port, async () => {
    console.log(`Listening on port ${port}`);
  });
});
