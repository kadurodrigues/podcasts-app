import express from 'express';
import config from './config';

const app = express();

app.get('/', (req, res) => {
  res.send("Hello Server");
});

app.listen(config.port, () => console.log(`Server running on port ${config.port}`));
