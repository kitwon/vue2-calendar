import { CalendarTimestamp, CalendarFormatter } from '../types';
export declare const PARSE_REGEX: RegExp;
export declare const PARSE_TIME: RegExp;
export declare const DAYS_IN_MONTH: number[];
export declare const DAYS_IN_MONTH_LEAP: number[];
export declare const DAYS_IN_MONTH_MIN = 28;
export declare const DAYS_IN_MONTH_MAX = 31;
export declare const MONTH_MAX = 12;
export declare const MONTH_MIN = 1;
export declare const DAY_MIN = 1;
export declare const DAYS_IN_WEEK = 7;
export declare const MINUTES_IN_HOUR = 60;
export declare const MINUTE_MAX = 59;
export declare const MINUTES_IN_DAY: number;
export declare const HOURS_IN_DAY = 24;
export declare const HOUR_MAX = 23;
export declare const FIRST_HOUR = 0;
export declare const OFFSET_YEAR = 10000;
export declare const OFFSET_MONTH = 100;
export declare const OFFSET_HOUR = 100;
export declare const OFFSET_TIME = 10000;
declare type CalendarTimestampFormatOptions = (timestamp: CalendarTimestamp, short: boolean) => object;
declare type CalendarTimestampOperation = (timestamp: CalendarTimestamp) => CalendarTimestamp;
export declare type VTime = number | string | {
    hour: number;
    minute: number;
};
export declare type VTimestampInput = number | string | Date;
export declare function getStartOfWeek(timestamp: CalendarTimestamp, weekdays: number[], today?: CalendarTimestamp): CalendarTimestamp;
export declare function getEndOfWeek(timestamp: CalendarTimestamp, weekdays: number[], today?: CalendarTimestamp): CalendarTimestamp;
export declare function getStartOfMonth(timestamp: CalendarTimestamp): CalendarTimestamp;
export declare function getEndOfMonth(timestamp: CalendarTimestamp): CalendarTimestamp;
export declare function validateTime(input: any): input is VTime;
export declare function parseTime(input: any): number | false;
export declare function validateTimestamp(input: any): input is VTimestampInput;
export declare function parseTimestamp(input: VTimestampInput, required?: false, now?: CalendarTimestamp): CalendarTimestamp;
export declare function parseTimestamp(input: VTimestampInput, required: true, now?: CalendarTimestamp): CalendarTimestamp;
export declare function parseDate(date: Date): CalendarTimestamp;
export declare function getDayIdentifier(timestamp: {
    year: number;
    month: number;
    day: number;
}): number;
export declare function getTimeIdentifier(timestamp: {
    hour: number;
    minute: number;
}): number;
export declare function getTimestampIdentifier(timestamp: CalendarTimestamp): number;
export declare function updateRelative(timestamp: CalendarTimestamp, now: CalendarTimestamp, time?: boolean): CalendarTimestamp;
export declare function isTimedless(input: VTimestampInput): input is Date | number;
export declare function updateHasTime(timestamp: CalendarTimestamp, hasTime: boolean, now?: CalendarTimestamp): CalendarTimestamp;
export declare function updateMinutes(timestamp: CalendarTimestamp, minutes: number, now?: CalendarTimestamp): CalendarTimestamp;
export declare function updateWeekday(timestamp: CalendarTimestamp): CalendarTimestamp;
export declare function updateFormatted(timestamp: CalendarTimestamp): CalendarTimestamp;
export declare function getWeekday(timestamp: CalendarTimestamp): number;
export declare function daysInMonth(year: number, month: number): number;
export declare function copyTimestamp(timestamp: CalendarTimestamp): CalendarTimestamp;
export declare function padNumber(x: number, length: number): string;
export declare function getDate(timestamp: CalendarTimestamp): string;
export declare function getTime(timestamp: CalendarTimestamp): string;
export declare function nextMinutes(timestamp: CalendarTimestamp, minutes: number): CalendarTimestamp;
export declare function nextDay(timestamp: CalendarTimestamp): CalendarTimestamp;
export declare function prevDay(timestamp: CalendarTimestamp): CalendarTimestamp;
export declare function relativeDays(timestamp: CalendarTimestamp, mover?: CalendarTimestampOperation, days?: number): CalendarTimestamp;
export declare function diffMinutes(min: CalendarTimestamp, max: CalendarTimestamp): number;
export declare function findWeekday(timestamp: CalendarTimestamp, weekday: number, mover?: CalendarTimestampOperation, maxDays?: number): CalendarTimestamp;
export declare function getWeekdaySkips(weekdays: number[]): number[];
export declare function timestampToDate(timestamp: CalendarTimestamp): Date;
export declare function createDayList(start: CalendarTimestamp, end: CalendarTimestamp, now: CalendarTimestamp, weekdaySkips: number[], max?: number, min?: number): CalendarTimestamp[];
/**
 *
 * @param {CalendarTimestamp} timestamp - start time object
 * @param {number} first - first timestampe (eg: `new Date(2020, 11, 25, 08, 00).getTime()`)
 * @param {number} minutes - step size
 * @param {number} count - interval count
 * @param {CalendarTimestamp} now - current time object
 */
export declare function createIntervalList(timestamp: CalendarTimestamp, first: number, minutes: number, count: number, now?: CalendarTimestamp): CalendarTimestamp[];
export declare function createNativeLocaleFormatter(locale: string, getOptions: CalendarTimestampFormatOptions): CalendarFormatter;
export {};
