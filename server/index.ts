import express from 'express';
import render from './render';
import path from 'path';
import { dbConnect } from './db';

import { Topic } from './db/index';

// Создание топика
export async function createTopic(topicName: string, topicText: string, ownerId: number) {
  return Topic.create({ topicName, topicText, ownerId });
}

// Получение пользователей по ID
export async function getTopicsByOwnerId(ownerId: number) {
  return Topic.findAll({ where: { ownerId } });
}

// dbConnect()
export function startApp() {
  dbConnect().then(async () => {
    try {
      await createTopic('TestTopic99', 'TestTopicText', 12);
      const topics = await getTopicsByOwnerId(12);

      // Проверяем, найдены ли топики
      if (!topics.length) {
        throw 'Not found'
      }

      // Получаем id первого топика
      console.log('topicstopics', topics);
      const { topicId } = topics[0];
      console.log('topicId', topicId);
    } catch (error) {
      console.log(error);
    }
  });
}



const PORT = process.env.PORT || 5000;


(async () => {

  startApp()

  const app = express();

  app.use(express.static(path.join(__dirname, '../../public')));
  app.use(render());

  
  app.listen(PORT, () => {
    console.log(`App started at ${PORT} port`);
  })

})();
