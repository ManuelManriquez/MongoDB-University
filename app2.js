const { MongoClient } = require("mongodb");
const uri = require("./atlas_uri.js");

console.log(uri);

const dbName = "blog";
const collectionName = "posts";
const newDocument = { name: "Manuel Manriquez Espinal", age: "23" };
const newDocumentReplace = { name: "Not Manuel Manriquez", age: "123" };
const queryFindDocument = { age: "23" };
const queryFindReplacedDocument = { age: "123" };

const client = new MongoClient(uri);
const db = client.db(dbName);
const collection = db.collection(collectionName);

const insertOne = async (newDoc = {}, collection) => {
  return JSON.stringify((newDoc = await collection.insertOne(newDoc)));
};

const findOne = async (queryDoc = {}, collection) => {
  return JSON.stringify((doc = await collection.findOne(queryDoc)));
};

const findMany = async (queryDoc = {}, collection) => {
  return JSON.stringify((doc = await collection.find(queryDoc).toArray()));
};

const replaceOne = async (queryDoc = {}, newDocumentReplace, collection) => {
  return JSON.stringify((doc = await collection.replaceOne(queryDoc, newDocumentReplace)));
};

const main = async () => {
  try {
    await client.connect();
    console.log("Insert One: " + (await insertOne(newDocument, collection)));
    console.log("Find One: " + (await findOne(queryFindDocument, collection)));
    console.log("Find Many: " + (await findMany({}, collection)));
    
    console.log("Replace One: " + (await replaceOne(queryFindDocument, newDocumentReplace, collection)));
    console.log("Find Many: " + (await findMany({}, collection)));

  } catch (err) {
    console.log(err);
  } finally {
    await client.close();
  }
};

main();
