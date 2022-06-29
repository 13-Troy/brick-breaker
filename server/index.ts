import express from 'express';
import render from './render';
import path from 'path';
import { dbConnect } from './db';


import TopicController  from './controllers/forum/topic';

import CommentController  from './controllers/forum/comment';

// dbConnect()
export function startApp() {
  dbConnect().then(async () => {
    try {

      await TopicController.create('TestTopic', 'TestTopicText', 15);
      await TopicController.create('TestTopic', 'TestTopicText', 16);


      await CommentController.create('TestTopic', 2, 2);

      await TopicController.delete(1);


      const topics = await TopicController.getAll();
      const topicsId = await TopicController.getById(2);

      console.log('topicstopicstopics',topics);
      console.log('topicsIdtopicsIdtopicsIdtopicsId',topicsId);
    
      
    } catch (error) {
      console.log(error);
    }
  });
}



const PORT = process.env.PORT || 5000;

(async () => {

  startApp()

  const app = express();

  app.get('/', (req, res) => {
    res.status(200).send('Hello World!');
  })

  app.post('/api/topic', (req, res) => {
    TopicController.create('test', 'TestTopicText', 78);
    res.status(200).send('Hello World!');
  })

  app.get('/api/topic', (req, res) => {
    TopicController.getAll()
      .then(response => {
        res.status(200).send(response);
      })
      .catch(error => {
        res.status(500).send(error);
      })

  })

  // app.delete('/api/topic/:id', async (req, res) => {
  //   const  id = Number(req.params.id)

  //   deleteTopicById(id)
  //   .then(response => {
  //     res.status(200).send(response);
  //   })
  //   .catch(error => {
  //     res.status(500).send(error);
  //   })

  // })


  app.get('/api/topic/:id', (req, res) => {
    const id = Number(req.params.id)

    TopicController.getById(id)

      .then(response => {
        res.status(200).send(response);
      })
      .catch(error => {
        res.status(500).send(error);
      })
  });


  app.use(express.static(path.join(__dirname, '../../public')));
  app.use(render());


  app.listen(PORT, () => {
    console.log(`App started at ${PORT} port`);
  })

})();
