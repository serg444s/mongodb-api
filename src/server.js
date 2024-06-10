import express from 'express';
import connection from './db/db.js';
const connectToDb = connection.connectToDb;
const getDb = connection.getDb;

export const setupServer = () => {
  const PORT = 4000;
  const app = express();
  let db;

  connectToDb((err) => {
    if (!err) {
      app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
        db = getDb();
      });
    } else {
      console.log(`Error DB conection ${err}`);
    }
  });

  app.get('/movies', (req, res) => {
    const movies = [];
    db.connection('movies')
      .find()
      .forEach((element) => {
        movies.push(element);
      })
      .than(() => {
        res.status(200).json(movies);
      });
  });
};
