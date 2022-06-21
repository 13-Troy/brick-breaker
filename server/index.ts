import express from 'express';
import render from './render';
import path from 'path';

const PORT = process.env.PORT || 5000;
const app = express();

app.use(express.static(path.join(__dirname, '../../public')));
app.use(render());

app.listen(PORT, () => {
  console.log(`App started at ${PORT} port`);
})
