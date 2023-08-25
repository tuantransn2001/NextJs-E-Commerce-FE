/* eslint-disable import/extensions */
<<<<<<< HEAD
import { Cart } from '@/domain/common';
=======

import { Cart } from '@/ts/types/cart.type';
>>>>>>> 0595a16089032e3ab77fef9886a1613486f99bba
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
};

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
function removeItemOnce(arr: any[], values: string[]) {
  return arr.reduce((res, item) => {
    if (!values.includes(item)) {
      res.push(item);
    }
    return res;
  }, []);
}
export const handleGetHrefArr = () =>
  removeItemOnce(window.location.href.split('/'), ['']);
