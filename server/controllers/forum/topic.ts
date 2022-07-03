import { Topic, ITopic } from '../../../server/models/topic';
import { Comment } from '../../../server/models/comment';
class TopicController {
  create(body:any) {
    const topicName = body.topicName
    const topicText = body.topicText
    const ownerId = body.ownerId
  
    console.log('body',body)

    return Topic.create({ topicName, topicText, ownerId });
  }
  getAll() {
    return Topic.findAll({ include: [{ model: Comment }] });
  }

  getById(topicId: number) {
    return Topic.findOne({ where: { topicId}, include: [{model: Comment}]});
  }

  delete(topicId: number) {
    return Topic.destroy({ where: { topicId } });
  }

  update(topicId: number, data: ITopic) {
    return Topic.update(data, { where: { topicId } });
  }
}

export default new TopicController()
