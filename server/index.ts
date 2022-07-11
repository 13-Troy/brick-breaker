import express from 'express';
import render from './render';
import path from 'path';
import {dbConnect} from './db';
import forumApi from './routers/forum'
const helmet = require("helmet");

const PORT = process.env.PORT || 5000;

(async () => {
  await dbConnect()

  const app = express();

  app.use(helmet.expectCt());

  app.use('/api/topic', forumApi)

 

  app.use(express.static(path.join(__dirname, '../../public')));
  app.use(render());


  app.listen(PORT, () => {
    console.log(`App started at ${PORT} port`);
  })

})();
