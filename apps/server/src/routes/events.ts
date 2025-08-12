import { Router } from 'express';
import { authRequired } from '../middleware/auth.js';
import { Event } from '../models/Event.js';

const router = Router();

router.post('/', authRequired, async (req: any, res) => {
  const event = await Event.create({ ...req.body, host: req.user.id });
  res.json(event);
});

router.get('/', async (_req, res) => {
  const events = await Event.find().sort({ date: 1 }).lean();
  res.json(events);
});

router.post('/:id/rsvp', authRequired, async (req: any, res) => {
  const event = await Event.findByIdAndUpdate(
    req.params.id,
    { $addToSet: { attendees: req.user.id } },
    { new: true }
  ).lean();
  res.json(event);
});

export default router;
