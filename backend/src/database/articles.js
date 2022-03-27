const {getDatabase} = require('./mongo');
const {ObjectID} = require('mongodb');

const collectionName = 'articles';

async function insertArticle(article) {
  const database = await getDatabase();
  const {insertedId} = await database.collection(collectionName).insertOne(article);
  return insertedId;
}

async function getArticles() {
  const database = await getDatabase();
  return await database.collection(collectionName).find({}).toArray();
}

async function deleteArticle(id) {
  const database = await getDatabase();
  await database.collection(collectionName).deleteOne({
    _id: new ObjectID(id),
  });
}

async function updateArticle(id, article) {
  const database = await getDatabase();
  delete article._id;
  await database.collection(collectionName).update(
    { _id: new ObjectID(id), },
    {
      $set: {
        ...article,
      },
    },
  );
}

async function getArticle(id){
  const database = await getDatabase();
  return database.collection(collectionName).findOne({ _id: ObjectID(id) });
}

module.exports = {
  insertArticle,
  getArticles,
  deleteArticle,
  updateArticle,
  getArticle,
};
