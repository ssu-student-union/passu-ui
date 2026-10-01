/** 해당 달 1일 0시 */
function startOfMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function startOfDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function addDays(date: Date, amount: number) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + amount);
}

/** 일(day)은 유지하되 대상 달의 말일을 넘으면 말일로 맞춘다 (1/31 + 1달 = 2/28) */
function addMonths(date: Date, amount: number) {
  const target = new Date(date.getFullYear(), date.getMonth() + amount, 1);
  const lastDay = new Date(target.getFullYear(), target.getMonth() + 1, 0).getDate();
  target.setDate(Math.min(date.getDate(), lastDay));
  return target;
}

function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function isSameMonth(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth();
}

/** 월요일 0 ~ 일요일 6 */
function getWeekdayIndex(date: Date) {
  return (date.getDay() + 6) % 7;
}

function getDaysInMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
}

export {
  addDays,
  addMonths,
  getDaysInMonth,
  getWeekdayIndex,
  isSameDay,
  isSameMonth,
  startOfDay,
  startOfMonth,
};
