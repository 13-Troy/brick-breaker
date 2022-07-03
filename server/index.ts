import express from 'express';
import render from './render';
import path from 'path';
import {dbConnect} from './db';
import forumApi from './routers/forum'


import TopicController  from './controllers/forum/topic';

import CommentController  from './controllers/forum/comment';

const PORT = process.env.PORT || 5000;


export function startApp() {
  dbConnect().then(async () => {
    try {

      await TopicController.create({topicName: 'TestTopic11111' , topicText: 'TestTopicText', ownerId: 16});
      await TopicController.create({topicName:'TestTopic2222' , topicText: 'TestTopicText', ownerId: 15});

      // await TopicController.create('TestTopic', 'TestTopicText', 16);


      await CommentController.create('TestTopic', 2, 2);

      // await TopicController.delete(1);


      const topics = await TopicController.getAll();
      const topicsId = await TopicController.getById(2);

      console.log('topicstopicstopics',topics);
      console.log('topicsIdtopicsIdtopicsIdtopicsId',topicsId);
    
      
    } catch (error) {
      console.log(error);
    }
  });
}

(async () => {
  // await dbConnect()

  startApp()

  const app = express();

  app.use('/api/topic', forumApi)


  app.use(express.static(path.join(__dirname, '../../public')));
  app.use(render());


  app.listen(PORT, () => {
    console.log(`App started at ${PORT} port`);
  })

})();
