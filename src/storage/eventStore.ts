import type { CalendarEvent } from '../types/event.types.js';

class EventStore {
  private events: Map<string, CalendarEvent> = new Map();

  getAll(): CalendarEvent[] {
    return Array.from(this.events.values());
  }

  getById(id: string): CalendarEvent | undefined {
    return this.events.get(id);
  }

  create(event: CalendarEvent): CalendarEvent {
    this.events.set(event.id, event);
    return event;
  }

  update(id: string, updates: Partial<CalendarEvent>): CalendarEvent | null {
    const event = this.events.get(id);
    if (!event) {
      return null;
    }

    const updatedEvent = { ...event, ...updates, id }; // Ensure id cannot be changed
    this.events.set(id, updatedEvent);
    return updatedEvent;
  }

  delete(id: string): boolean {
    return this.events.delete(id);
  }

  clear(): void {
    this.events.clear();
  }
}

// Singleton instance
export const eventStore = new EventStore();
