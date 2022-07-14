import express from 'express';
import render from './render';
import path from 'path';
import { dbConnect } from './db';
import forumApi from './routers/forum'
import { auth } from "./routers/auth";
import https from 'https';
import helmet from 'helmet';
import fs from 'fs';
import cookieParser from 'cookie-parser';
import session from 'express-session';
import themeApi from './routers/theme'

const PORT = process.env.PORT || 5000;

(async () => {
  await dbConnect()
  const app = express();
  app.use(helmet.expectCt());
  app.use(cookieParser())
  app.use(session({ secret: 'sessions_secret' }))
  app.use(express.static(path.join(__dirname, '../../public')));


  app.use('/api/topic', auth, forumApi)
  app.use('/api/theme', themeApi)
  app.use(render());

  app.listen(8080);

  if (process.env.NODE_ENV === 'development') {
    const serverOptions = {
      key: fs.readFileSync(path.join(__dirname, 'localhost-key.pem')),
      cert: fs.readFileSync(path.join(__dirname, 'localhost.pem')),
    };

    const server = https.createServer(serverOptions, app)
    server.listen(PORT, () => {
      console.log(`App started at ${PORT} port`);
    })

    const key = fs.readFileSync(path.join(__dirname, 'localhost-key.pem'));
    const cert = fs.readFileSync(path.join(__dirname, 'localhost.pem'));

    https.createServer({ key, cert }, app).listen(8443);
  }

})();

