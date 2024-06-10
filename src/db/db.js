import { MongoClient } from 'mongodb';

const URL =
  'mongodb+srv://sergeysavchenko1303:fJEWZjA3xdGvetIO@cluster0.y1ns8k8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

let dbConnection;

const connection = {
  connectToDb: (cb) => {
    MongoClient.connect(URL)
      .then((client) => {
        console.log('Connectet to DB');
        dbConnection = client.db();
        return cb;
      })
      .catch((err) => {
        return cb(err);
      });
  },
  getDb: () => {
    dbConnection;
  },
};

export default connection;
