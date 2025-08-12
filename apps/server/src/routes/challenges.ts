import { Router } from 'express';
import { authRequired, requireRole } from '../middleware/auth.js';
import { Challenge } from '../models/Challenge.js';

const router = Router();

router.post('/', authRequired, requireRole(['alumni', 'admin']), async (req: any, res) => {
  const challenge = await Challenge.create({ ...req.body, postedBy: req.user.id });
  res.json(challenge);
});

router.get('/', async (_req, res) => {
  const challenges = await Challenge.find().sort({ createdAt: -1 }).lean();
  res.json(challenges);
});

export default router;
