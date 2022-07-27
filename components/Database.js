import { MongoClient } from "mongodb";
require("dotenv").config();

const credentials = process.env.MDB_URL;
const database_name = process.env.DB_NAME;

export default class Database {
  static async connect() {
    try {
      const client = await MongoClient.connect(credentials);
      return client;
    } catch (err) {
      return err;
    }
  }

  // create

  static async insertOne(collection, object) {
    const client = await Database.connect();
    const dbcollection = client.db(database_name);
    const conn = dbcollection.collection(collection);
    try {
      const result = await conn.insertOne(object);
      client.close();
      return result;
    } catch (e) {
      client.close();
      return e.errmsg;
    }
  }

  static async insertMany(collection, object) {
    const client = await Database.connect();
    const dbcollection = client.db(database_name);
    const conn = dbcollection.collection(collection);
    const options = { ordered: true };
    try {
      const result = await conn.insertMany(object, options);
      client.close();
      return result;
    } catch (e) {
      client.close();
      return e.errmsg;
    }
  }

  // update

  static async updateOne(collection, filter, object, options) {
    const client = await Database.connect();
    const dbcollection = client.db(database_name);
    const conn = dbcollection.collection(collection);
    try {
      const result = await conn.updateOne(filter, object, options);
      client.close();
      return result;
    } catch (e) {
      client.close();
      return e.errmsg;
    }
  }

  static async updateMany(collection, filter, object) {
    const client = await Database.connect();
    const dbcollection = client.db(database_name);
    const conn = dbcollection.collection(collection);
    try {
      const result = await conn.updateMany(filter, object);
      client.close();
      return result;
    } catch (e) {
      client.close();
      return e.errmsg;
    }
  }

  // read

  static async findOne(collection, query, options) {
    const client = await Database.connect();
    const dbcollection = client.db(database_name);
    const conn = dbcollection.collection(collection);
    const result = await conn.findOne(query, options);
    client.close();
    return result;
  }

  static async findAll(collection, options) {
    const client = await Database.connect();
    const dbcollection = client.db(database_name);
    const conn = dbcollection.collection(collection);
    const result = await conn.find({}, options).toArray();
    client.close();
    return result;
  }

  static async find(collection, query) {
    const client = await Database.connect();
    const dbcollection = client.db(database_name);
    const conn = dbcollection.collection(collection);
    const result = await conn.find(query).toArray();
    client.close();
    return result;
  }

  // delete

  static async deleteOne(collection, filter) {
    const client = await Database.connect();
    const dbcollection = client.db(database_name);
    const conn = dbcollection.collection(collection);
    try {
      const result = await conn.deleteOne(filter);
      client.close();
      return result;
    } catch (e) {
      client.close();
      return e.errmsg;
    }
  }

  static async deleteMany(collection, filter) {
    const client = await Database.connect();
    const dbcollection = client.db(database_name);
    const conn = dbcollection.collection(collection);
    try {
      const result = await conn.deleteMany(filter);
      client.close();
      return result;
    } catch (e) {
      client.close();
      return e.errmsg;
    }
  }

}
