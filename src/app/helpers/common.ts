export const dateToString = (date: string | number | Date): string => {
  const createDate = new Date(date);

  const year = createDate.getUTCFullYear();
  let month = (createDate.getUTCMonth() + 1).toString();
  let day = createDate.getUTCDate().toString();

  month = month.length === 1 ? (month = '0' + month) : month;
  day = day.length === 1 ? (day = '0' + day) : day;

  // string format = "09-06-2020";
  const result = `${day}-${month}-${year}`;
  return result;
};

export const dateAndTimeToString = (date: string | number | Date): string => {
  const createDate = new Date(date);

  const year = createDate.getUTCFullYear();
  let month = (createDate.getUTCMonth() + 1).toString();
  let day = createDate.getUTCDate().toString();
  let hours = createDate.getUTCHours().toString();
  let seconds = createDate.getUTCSeconds().toString().padStart(2, '0');
  let minutes = createDate.getUTCMinutes().toString().padStart(2, '0');

  month = month.length === 1 ? (month = '0' + month) : month;
  day = day.length === 1 ? (day = '0' + day) : day;

  const result = `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
  return result;
};

export const removeFalsyValuesFromObject = <T>(object: T) => {
  const result: any = {};
  for (let key in object) {
    if (object[key as keyof T]) {
      result[key] = object[key as keyof T];
    }
  }
  return result as T;
};

export const removeEmptyArraysFromObject = (object: any) => {
  const result: any = {};
  for (let key in object) {
    if (Array.isArray(object[key])) {
      if (object[key].length !== 0) {
        result[key] = object[key];
      }
    }
  }
  return result;
};

export const delay = (ms: number) => {
  return new Promise((resolve) => setTimeout(resolve, ms));
};
