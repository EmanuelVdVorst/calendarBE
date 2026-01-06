import { Router, type Request, type Response } from 'express';
import type { CalendarEvent, CreateEventDto, UpdateEventDto } from '../types/event.types.js';
import { eventStore } from '../storage/eventStore.js';

const router = Router();

// GET /api/events - Get all events
router.get('/', (_req: Request, res: Response): void => {
  const events = eventStore.getAll();
  res.json(events);
});

// GET /api/events/:id - Get event by ID
router.get('/:id', (req: Request, res: Response): void => {
  const { id } = req.params;
  const event = eventStore.getById(id);

  if (!event) {
    res.status(404).json({ error: 'Event not found' });
    return;
  }

  res.json(event);
});

// POST /api/events - Create new event
router.post('/', (req: Request, res: Response): void => {
  const eventData = req.body as CreateEventDto;

  // Validate required fields
  if (!eventData.title || !eventData.start || !eventData.end || !eventData.color) {
    res.status(400).json({ error: 'Missing required fields: title, start, end, color' });
    return;
  }

  // Generate ID
  const id = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;

  const newEvent: CalendarEvent = {
    id,
    ...eventData,
  };

  const createdEvent = eventStore.create(newEvent);
  res.status(201).json(createdEvent);
});

// PUT /api/events/:id - Update event
router.put('/:id', (req: Request, res: Response): void => {
  const { id } = req.params;
  const updates = req.body as UpdateEventDto;

  const updatedEvent = eventStore.update(id, updates);

  if (!updatedEvent) {
    res.status(404).json({ error: 'Event not found' });
    return;
  }

  res.json(updatedEvent);
});

// DELETE /api/events/:id - Delete event
router.delete('/:id', (req: Request, res: Response): void => {
  const { id } = req.params;
  const deleted = eventStore.delete(id);

  if (!deleted) {
    res.status(404).json({ error: 'Event not found' });
    return;
  }

  res.status(204).send();
});

export default router;
