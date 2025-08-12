import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import http from 'http';
import { Server as SocketIOServer } from 'socket.io';
import { env } from './config/env.js';
import { connectToDatabase } from './config/db.js';

import authRoutes from './routes/auth.js';
import profileRoutes from './routes/profile.js';
import jobsRoutes from './routes/jobs.js';
import mentorshipRoutes from './routes/mentorships.js';
import eventsRoutes from './routes/events.js';
import discussionsRoutes from './routes/discussions.js';
import storiesRoutes from './routes/stories.js';
import challengesRoutes from './routes/challenges.js';

const app = express();
const server = http.createServer(app);
const io = new SocketIOServer(server, {
  cors: { origin: env.corsOrigin }
});

app.use(cors({ origin: env.corsOrigin }));
app.use(express.json());
app.use(morgan('dev'));

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.use('/api/auth', authRoutes);
app.use('/api/profile', profileRoutes);
app.use('/api/jobs', jobsRoutes);
app.use('/api/mentorships', mentorshipRoutes);
app.use('/api/events', eventsRoutes);
app.use('/api/discussions', discussionsRoutes);
app.use('/api/stories', storiesRoutes);
app.use('/api/challenges', challengesRoutes);

io.on('connection', (socket) => {
  socket.on('disconnect', () => {});
});

async function start() {
  try {
    await connectToDatabase();
    console.log('Connected to MongoDB');
  } catch (err) {
    console.error('MongoDB connection failed:', err);
  }

  server.listen(env.port, () => {
    console.log(`server listening on :${env.port}`);
  });
}

start();
