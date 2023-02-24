const { MongoClient } = require("mongodb");
const uri = require("./atlas_uri.js");

console.log(uri);

const client = new MongoClient(uri);
const dbname = "posts";

const connectToDatabase = async () => {
  try {
    await client.connect();
    console.log(`Connected to the ${dbname} database`);
  } catch (error) {
    console.error(`Error connecting to ${dbname}`);
  }
};

const main = async () => {
  try {
    await connectToDatabase();
    const db = client.db("Cluster0");
    const posts = db.collection("posts");

    posts.insertOne({ name: "manuel", age: "22" });
  } catch (err) {
    console.error(err);
  } finally {
    await client.close();
  }
};

main();
