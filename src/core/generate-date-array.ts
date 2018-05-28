import startOfMonth from 'date-fns/start_of_month';
import endOfMonth from 'date-fns/end_of_month';
import setISODay from 'date-fns/set_iso_day';
import eachDay from 'date-fns/each_day';

export default (date: Date): Array<Date> => {
  const firstDayOfMonth = startOfMonth(date);
  const lastDayOfMonth = endOfMonth(date);

  // Set Monday of week which has first day of month
  const startDayPointOfArray = setISODay(firstDayOfMonth, 1);
  // Set Sunday of week which has first day of month
  const endDayPointOfArray = setISODay(lastDayOfMonth, 7);

  return eachDay(startDayPointOfArray, endDayPointOfArray);
};
