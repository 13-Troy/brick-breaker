import { Router } from 'express'
const router = Router();

import TopicController from '../controllers/forum/topic';

// import CommentController from '../controllers/forum/comment';

router.post('/', (req, res) => {
  TopicController.create('test', 'TestTopicText', 78);
  res.status(200).send('Hello World!');
})

router.get('/', (req, res) => {
  TopicController.getAll()
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    })
})

router.get('/:id', (req, res) => {
  const id = Number(req.params.id)

  TopicController.getById(id)

    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    })
});


router.put('/:id', (req, res) => {
  const id = Number(req.params.id)
  const data = req.body;
  TopicController.update(id, data)

  res.send(req.body);
});


router.delete('/:id', (req, res) => {
  const id = Number(req.params.id)

  TopicController.delete(id)
    .then(response => {
      res.status(200).send(response);
    })
    .catch(error => {
      res.status(500).send(error);
    })
});


export default router;
