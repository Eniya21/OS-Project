import { Router } from 'express';
import { authRequired, requireRole } from '../middleware/auth.js';
import { Story } from '../models/Story.js';

const router = Router();

router.post('/', authRequired, requireRole(['alumni', 'admin']), async (req: any, res) => {
  const story = await Story.create({ ...req.body, author: req.user.id });
  res.json(story);
});

router.get('/', async (_req, res) => {
  const stories = await Story.find().sort({ createdAt: -1 }).lean();
  res.json(stories);
});

export default router;
