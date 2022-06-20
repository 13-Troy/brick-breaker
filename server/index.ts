import express from 'express';
import render from './render';
import { dbConnect } from '../client/init/index';

const PORT = process.env.PORT || 5000;
const app = express();

app.use(render());

app.listen(PORT, () => {
  console.log(`App started at ${PORT} port`);
})

dbConnect()
