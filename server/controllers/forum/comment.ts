import { Comment } from '../../../server/models/comment';
class CommentController {
  create(body:any) {
    const { commentText, ownerId, ownerName, ownerAvatar, topicId } = body
    return Comment.create({ commentText, ownerId, ownerName, ownerAvatar, topicId });
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
