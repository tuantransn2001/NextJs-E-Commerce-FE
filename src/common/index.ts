/* eslint-disable import/extensions */
import { Falsy, ObjectType } from '@/ts/types/common';
export const _ = undefined;
export const isEmpty = (target: ObjectType | any[]): boolean => {
  return target instanceof Array
    ? target.length === 0
    : target === undefined || target === null
    ? true
    : Object.keys(target).length === 0;
};
export const checkMissPropertyInObjectBaseOnValueCondition = (
  baseObject: ObjectType,
  valueConditions: Falsy[],
): string[] => {
  const arrMissArray: string[] = Object.keys(baseObject).reduce(
    (res: any, key: string) => {
      if (
        baseObject.hasOwnProperty(key) &&
        valueConditions.includes(baseObject[key])
      ) {
        res.push(key);
      }
      return res;
    },
    [],
  );

  return arrMissArray;
};
export const capitalize = (str: string): string =>
  str.charAt(0).toUpperCase() + str.slice(1);

// A wrapper for "JSON.parse()"" to support "undefined" value
export function parseJSON<T>(value: string | null): T | undefined {
  try {
    return value === 'undefined' ? undefined : JSON.parse(value ?? '');
  } catch {
    console.log('parsing error on', { value });
    return undefined;
  }
}
