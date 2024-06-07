import express from 'express';

const PORT = 4000;

export const setupServer = () => {
  const app = express();
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
};
