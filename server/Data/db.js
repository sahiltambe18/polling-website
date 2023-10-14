const mongodb = require('mongodb');
const dotenv=require("dotenv").config()

const MongoClient = mongodb.MongoClient;

 let mongodbUrl = 'mongodb://127.0.0.1:27017';


if (process.env.MONGODB_URL) {
  mongodbUrl = process.env.MONGO_URI;
}


let database;

async function connectToDatabase() {
  const client = await MongoClient.connect(
    mongodbUrl
    );
    database = client.db('Polling');
}

function getDb() {
  connectToDatabase()
    if (!database) {
      throw { message: 'You must connect first!' };
    }
    return database;
  }

module.exports = {
  connectToDatabase: connectToDatabase,
  getDb: getDb,
};
