import { Router } from 'express';
import { requireRole, authRequired } from '../middleware/auth.js';
import { Job } from '../models/Job.js';

const router = Router();

router.post('/', authRequired, requireRole(['alumni', 'admin']), async (req: any, res) => {
  const job = await Job.create({ ...req.body, postedBy: req.user.id });
  res.json(job);
});

router.get('/', async (_req, res) => {
  const jobs = await Job.find().sort({ createdAt: -1 }).lean();
  res.json(jobs);
});

export default router;
