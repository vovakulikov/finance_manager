import generateDateArray from './generate-date-array';
import eachDay from 'date-fns/each_day';
import isMonday from 'date-fns/is_monday';
import isSunday from 'date-fns/is_sunday';

const STANDARDT_SIZE_OF_DATA_ARRAY = [28, 35, 42];

function commonCheckDateArray(dateArray: Array<Date>) {
  const isDateArrayHasCorrectSize = STANDARDT_SIZE_OF_DATA_ARRAY.includes(dateArray.length);
  const lastDayInDataset = dateArray[dateArray.length - 1];
  const firstDayInDataset = dateArray[0];

  expect(isDateArrayHasCorrectSize).toBeTruthy();
  expect(isMonday(firstDayInDataset)).toBeTruthy();
  expect(isSunday(lastDayInDataset)).toBeTruthy();
}

describe('should test generator of date array', () => {

  test('should length will be 28 days (1998 1st Febrary)', () => {
    const dateArray = generateDateArray(new Date(1999, 1, 1));

    commonCheckDateArray(dateArray);
    expect(dateArray.length).toBe(28);
  });

  test('should length will be 35 days', () => {
    const dateArray = generateDateArray(new Date(2018, 4, 1));

    commonCheckDateArray(dateArray);
    expect(dateArray.length).toBe(35);
  });

  test('should length will be 42 days (1998 1st March)', () => {
    const dateArray = generateDateArray(new Date(2000, 9, 1));

    commonCheckDateArray(dateArray);
    expect(dateArray.length).toBe(42);
  });

  test('should works with leap-year moth', () => {
    const dateArray = generateDateArray(new Date(2004, 1));

    commonCheckDateArray(dateArray);
  });

  test('should works with all mounts from 2000 to 2020', () => {
    const datesForTest = eachDay(new Date(2001, 0, 1), new Date(2020, 11, 31));

    datesForTest.forEach((date: Date) => {
      const dateArray = generateDateArray(date);

      commonCheckDateArray(dateArray);
    });
  });

});
