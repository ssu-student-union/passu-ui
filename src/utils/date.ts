import dayjs from "dayjs";

/** 해당 달 1일 0시 */
function startOfMonth(date: Date) {
  return dayjs(date).startOf("month").toDate();
}

function startOfDay(date: Date) {
  return dayjs(date).startOf("day").toDate();
}

function addDays(date: Date, amount: number) {
  return dayjs(startOfDay(date)).add(amount, "day").toDate();
}

/** 일(day)은 유지하되 대상 달의 말일을 넘으면 말일로 맞춘다 (1/31 + 1달 = 2/28) */
function addMonths(date: Date, amount: number) {
  return dayjs(date).add(amount, "month").toDate();
}

function isSameDay(a: Date, b: Date) {
  return dayjs(a).isSame(b, "day");
}

function isSameMonth(a: Date, b: Date) {
  return dayjs(a).isSame(b, "month");
}

/** 월요일 0 ~ 일요일 6 */
function getWeekdayIndex(date: Date) {
  return (dayjs(date).day() + 6) % 7;
}

function getDaysInMonth(date: Date) {
  return dayjs(date).daysInMonth();
}

/** 같은 달의 `day`일 0시 */
function withDayOfMonth(date: Date, day: number) {
  return dayjs(date).startOf("month").date(day).toDate();
}

function getDayOfMonth(date: Date) {
  return dayjs(date).date();
}

function isWeekend(date: Date) {
  const day = dayjs(date).day();
  return day === 0 || day === 6;
}

/** 지금 이 순간 */
function now() {
  return dayjs().toDate();
}

/** 2026년 10월 */
function formatYearMonth(date: Date) {
  return dayjs(date).format("YYYY년 M월");
}

/** 2026년 10월 7일 */
function formatDate(date: Date) {
  return dayjs(date).format("YYYY년 M월 D일");
}

export {
  addDays,
  addMonths,
  formatDate,
  formatYearMonth,
  getDayOfMonth,
  getDaysInMonth,
  getWeekdayIndex,
  isSameDay,
  isSameMonth,
  isWeekend,
  now,
  startOfDay,
  startOfMonth,
  withDayOfMonth,
};
