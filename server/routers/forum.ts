import { Router } from 'express'
const router = Router();

import TopicController from '../controllers/forum/topic';
// import CommentController from '../controllers/forum/comment';

router.get('/', async (req, res) => {
  try {
    const response = await TopicController.getAll()
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send(error);
  }
})

router.post('/', async (req, res) => {
  // const { topicName, topicText, ownerId } = req.body
  try {
    const response = await TopicController.create(req.body)
    // const response = await TopicController.create({topicName:'ForumTest', topicText:'ForumTest', ownerId:77})
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


router.put('/:id', async (req, res) => {
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
    const response = await TopicController.delete(id)
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send(error);
  }
});


export default router;
