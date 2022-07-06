import { Router } from 'express'
const router = Router();

import TopicController from '../controllers/forum/topic';
import CommentController from '../controllers/forum/comment';
import bodyParser from 'body-parser';

router.get('/', async (req, res) => {
  try {
    const response = await TopicController.getAll()
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send(error);
  }
})


const jsonParser = bodyParser.json()  
router.post('/', jsonParser, async (req, res) => {
  const { topicName, topicText, ownerId, ownerName, ownerAvatar } = req.body
  try {
    const response = await TopicController.create({
      topicName: topicName,
      topicText: topicText,
      ownerId: ownerId,
      ownerName: ownerName,
      ownerAvatar: ownerAvatar
    })
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send(error);
  }
})


router.get('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    const response = await TopicController.getById(id)
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send(error);
  }
});


router.put('/:id', jsonParser, async (req, res) => {
  try {
    const id = Number(req.params.id)
    const data = req.body;
    const response = await TopicController.update(id, data)
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send(error);
  }
});


router.delete('/:id', async (req, res) => {
  try {
    const id = Number(req.params.id)
    await TopicController.delete(id)
    res.status(200);
  } catch (error) {
    res.status(500).send(error);
  }
});



router.post('/:id/comment', jsonParser,  async (req, res) => {
  const { commentText, ownerId, ownerName, ownerAvatar, topicId} = req.body
  try {
    const response = await CommentController.create({
      commentText: commentText,
      ownerId: ownerId,
      ownerName: ownerName,
      ownerAvatar: ownerAvatar,
      topicId: topicId
    })
    res.status(200).send(response);

  } catch (error) {
    res.status(500).send(error);
  }
})

router.delete('/:topicId/comment/:commentId', async (req, res) => {
  try {
    const id = Number(req.params.commentId)
    await CommentController.delete(id)
    res.status(200);
  } catch (error) {
    res.status(500).send(error);
  }
});


export default router;
