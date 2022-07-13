import { Router } from 'express'
const router = Router();
import ThemeController from '../controllers/theme';

import bodyParser from 'body-parser';

const jsonParser = bodyParser.json()

router.post('/', jsonParser, async (req, res) => {
  const { userId, baseTheme } = req.body
  try {
    const response = await ThemeController.create({
      userId: userId,
      baseTheme: baseTheme,
    })
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send(error);
  }
})

router.get('/:userId', async (req, res) => {
  try {
    const userId = Number(req.params.userId)
    const response = await ThemeController.getById(userId)
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.put('/:userId', jsonParser, async (req, res) => {
  try {
    const userId = Number(req.params.userId)
    const data = req.body;
    const response = await ThemeController.update(userId, data)
    res.status(200).send(response);
  } catch (error) {
    res.status(500).send(error);
  }
});


export default router;
