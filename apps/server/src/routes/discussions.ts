import { Router } from 'express';
import { authRequired } from '../middleware/auth.js';
import { Discussion } from '../models/Discussion.js';

const router = Router();

router.post('/', authRequired, async (req: any, res) => {
  const topic = await Discussion.create({ ...req.body, createdBy: req.user.id });
  res.json(topic);
});

router.get('/', async (_req, res) => {
  const topics = await Discussion.find().sort({ createdAt: -1 }).lean();
  res.json(topics);
});

export default router;
