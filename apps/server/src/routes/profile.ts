import { Router } from 'express';
import { authRequired } from '../middleware/auth.js';
import { User } from '../models/User.js';

const router = Router();

router.get('/me', authRequired, async (req: any, res) => {
  const user = await User.findById(req.user.id).lean();
  if (!user) return res.status(404).json({ error: 'Not found' });
  res.json(user);
});

router.put('/me', authRequired, async (req: any, res) => {
  const updates = req.body;
  const user = await User.findByIdAndUpdate(req.user.id, updates, { new: true }).lean();
  res.json(user);
});

export default router;
