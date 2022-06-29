import express from 'express';
import render from './render';
import path from 'path';
import { dbConnect } from './db';


import {
  createTopic,
  getTopics,
  updateTopic,
  createComment,
  getComment,
  getTopicById
} from '../controllers/forum';



// dbConnect()
export function startApp() {
  dbConnect().then(async () => {
    try {

      await createTopic('TestTopic', 'TestTopicText', 12);
      const topics = await getTopics();

      console.log('topicsList comments', topics[0].comments);

      await createComment('qwwertyee', 12, 8);

      await getComment(8);
      
      // Проверяем, найдены ли топики
      if (!topics.length) {
        throw 'Not found'
      }

      await updateTopic(35, {
        topicId: 35,
        topicName: 'UPD'
      })
      
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
    createTopic('test', 'TestTopicText', 13);
    res.status(200).send('Hello World!');
  })

  app.get('/api/topics', (req, res) => {
    getTopics()
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

    getTopicById(id)

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
