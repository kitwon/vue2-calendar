import { CalendarTimestamp, CalendarEvent, CalendarEventParsed } from '../types';
export declare function parseEvent(input: CalendarEvent, index: number, startProperty: string, endProperty: string, timed?: boolean, category?: string | false): CalendarEventParsed;
export declare function isEventOn(event: CalendarEventParsed, dayIdentifier: number): boolean;
export declare function isEventStart(event: CalendarEventParsed, day: CalendarTimestamp, dayIdentifier: number, firstWeekday: number): boolean;
export declare function isEventOverlapping(event: CalendarEventParsed, startIdentifier: number, endIdentifier: number): boolean;
