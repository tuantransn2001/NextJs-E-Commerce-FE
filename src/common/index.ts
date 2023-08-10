/* eslint-disable import/extensions */
import { Cart } from '@/domain/common';
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
export const capitalizeChar = (str: string | undefined): string => {
  if (str) {
    const source = str.toLowerCase();
    return source.toLowerCase().charAt(0).toUpperCase() + source.slice(1);
  } else {
    return '';
  }
};

export const handleFormatTitleInCludeSpecChar = (
  str: string | undefined,
  specChar: string,
) => {
  return str
    ? str
        .split(specChar)
        .map((str) => capitalizeChar(str))
        .join(specChar)
    : '';

  // return str.split();
};

// A wrapper for "JSON.parse()"" to support "undefined" value
export function parseJSON<T>(value: string | null): T | undefined {
  try {
    return value === 'undefined' ? undefined : JSON.parse(value ?? '');
  } catch {
    return undefined;
  }
}

export const handleCalcCartTotal = (cartData: Cart | null) => {
  const isCartEmpty = cartData === null || isEmpty(cartData.products);
  if (isCartEmpty) {
    return 0;
  } else {
    return cartData?.products.reduce((total, product) => {
      total += +product.price * product.quantity;
      return total;
    }, 0);
  }
};
