import express from 'express';
import render from './render';
import path from 'path';
import {dbConnect} from './db';
import forumApi from './routers/forum'
import themeApi from './routers/theme'
const helmet = require("helmet");

const PORT = process.env.PORT || 5000;

(async () => {
  await dbConnect()

  const app = express();

  // как правильно???
  app.use(helmet.hsts());

  app.use('/api/topic', forumApi)
  app.use('/api/theme', themeApi)
 

  app.use(express.static(path.join(__dirname, '../../public')));
  app.use(render());


  app.listen(PORT, () => {
    console.log(`App started at ${PORT} port7`);
  })

})();
