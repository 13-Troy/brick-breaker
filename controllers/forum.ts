import { Topic, ITopic, Comment} from '../server/db/index';

// Создание топика
export async function createTopic(topicName: string, topicText: string, ownerId: number) {
  return Topic.create({ topicName, topicText, ownerId });
}

// Получение списка топиков
export async function getTopics() {
  return Topic.findAll({ include: [{model: Comment}], });
}


// Получить топик по ID
export async function getTopicById(topicId: number) {
  return Topic.findOne({ where: { topicId}});
}

// Удаление топиков по ID
export async function deleteTopicById(topicId: number) {
  return Topic.destroy({ where: { topicId}});
}

// Обновление топика
export async function updateTopic(topicId:number, data: ITopic) {
  return Topic.update(data, { where: { topicId }});
}

// Создание комментария
export async function createComment(commentText: string, ownerId: number, topicId: number, ) {
  return Comment.create({ commentText, ownerId, topicId, });
}

// Получение комментария по ID топика
export async function getComment(topicId:number) {
  return (
    Comment.findAll({
      where: { topicId }
    }))
}



