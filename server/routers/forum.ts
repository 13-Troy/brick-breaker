import { Router } from 'express'
const router = Router();
import TopicController from '../controllers/forum/topic';
import CommentController from '../controllers/forum/comment';
import bodyParser from 'body-parser';
import { body } from 'express-validator';

router.get('/', async (req, res) => {
  try {
    const response = await TopicController.getAll()
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send(error);
  }
})

const jsonParser = bodyParser.json()
router.post('/', jsonParser, body('topicName').not().isEmpty().trim().escape(), body('topicText').not().isEmpty().trim().escape(), async (req, res) => {
  const { topicName, topicText } = req.body

  // @ts-ignore
  const user = req.session.user as UserData
  try {
    const response = await TopicController.create({
      topicName: topicName,
      topicText: topicText,
      ownerId: user.id,
      ownerName: user.first_name,
      ownerAvatar: user.avatar,
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

  const id = Number(req.params.id)
  const post = await TopicController.getById(id)

   // @ts-ignore
   const user = req.session.user as UserData

  if (!post) {
    res.status(404).send('Not Found')
  }

  if (post?.ownerId !== user.id) {
    res.status(404).send('Forbidden')
  }
  else {
    try {

      const data = req.body;
      const response = await TopicController.update(id, data)
      res.status(200).send(response);
    } catch (error) {
      res.status(500).send(error);
    }
  }
});


router.delete('/:id', async (req, res) => {
  const id = Number(req.params.id)
  const post = await TopicController.getById(id)

  // @ts-ignore
  const user = req.session.user as UserData

  if (!post) {
    return res.status(404).send('Not Found')
  }

  if (post?.ownerId !== user.id) {
    return res.status(404).send('Forbidden')
  }


  try {
    await TopicController.delete(id)
    return res.status(200).send('OK');
  } catch (error) {
    return res.status(500).send(error);
  }

});



router.post('/:id/comment', jsonParser, body('commentText').not().isEmpty().trim().escape(), async (req, res) => {
  const { commentText, topicId } = req.body

  // @ts-ignore
  const user = req.session.user as UserData
  try {
    const response = await CommentController.create({
      commentText: commentText,
      ownerId: user.id,
      ownerName: user.first_name,
      ownerAvatar: user.avatar,
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
    res.status(200).send('OK');
  } catch (error) {
    res.status(500).send(error);
  }
});


export default router;
