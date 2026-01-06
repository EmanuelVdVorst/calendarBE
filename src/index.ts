import express, { type Request, type Response } from 'express';
import cors from 'cors';
import eventsRouter from './routes/events.routes.js';

const app = express();
const PORT = process.env.PORT ?? 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (_req: Request, res: Response) => {
  res.json({ message: 'Calendar API is running' });
});

app.get('/api/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok', timestamp: new Date().toISOString() });
});

// Events API routes
app.use('/api/events', eventsRouter);

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
  console.log(`Health check: http://localhost:${PORT}/api/health`);
  console.log(`Events API: http://localhost:${PORT}/api/events`);
});
