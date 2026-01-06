export interface CalendarEvent {
  id: string;
  title: string;
  start: string; // ISO 8601 date string
  end: string;   // ISO 8601 date string
  color: string;
}

export interface CreateEventDto {
  title: string;
  start: string;
  end: string;
  color: string;
}

export interface UpdateEventDto {
  title?: string;
  start?: string;
  end?: string;
  color?: string;
}
