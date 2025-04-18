export function getFormattedDate(date) {
  if (!(date instanceof Date) || isNaN(date.getTime())) {
    return "Invalid date";
  }

  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
}

export function getDateMinusDays(date, days) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
}
