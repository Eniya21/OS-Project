import { Router } from 'express';
import { authRequired, requireRole } from '../middleware/auth.js';
import { Mentorship } from '../models/Mentorship.js';

const router = Router();

router.post('/', authRequired, requireRole(['alumni', 'admin']), async (req: any, res) => {
  const offer = await Mentorship.create({ ...req.body, mentor: req.user.id });
  res.json(offer);
});

router.get('/', async (_req, res) => {
  const offers = await Mentorship.find().sort({ createdAt: -1 }).lean();
  res.json(offers);
});

export default router;
