import { Topic, ITopic } from '../../../server/models/topic';
import { Comment } from '../../../server/models/comment';
class TopicController {
  create(topicName: string, topicText: string, ownerId: number) {
    return Topic.create({ topicName, topicText, ownerId });
  }
  getAll() {
    return Topic.findAll({ include: [{ model: Comment }] });
  }

  getById(topicId: number) {
    return Topic.findOne({ where: { topicId } });
  }

  delete(topicId: number) {
    return Topic.destroy({ where: { topicId } });
  }

  update(topicId: number, data: ITopic) {
    return Topic.update(data, { where: { topicId } });
  }
}

export default new TopicController()
