import { Comment } from '../../../server/models/comment';
class CommentController {
  create(commentText: string, ownerId: number, topicId: number) {
    return Comment.create({ commentText, ownerId, topicId });
  }

  getAll(topicId:number) {
    return (
      Comment.findAll({
        where: { topicId }
      }))
  }

  delete(commentId: number) {
    return Comment.destroy({ where: { commentId } });
  }

}

export default new CommentController()
