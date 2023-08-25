/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable import/extensions */
import { parseJSON } from '@/common';
import { PaginationDTO } from '@/ts/dto/common.dto';
import { RESPONSE_STATUS } from '@/ts/enums/api_enums';
import { ObjectType, ResponseAttributes, SetValue } from '@/ts/types/common';
import HttpException from '@/ts/utils/http.exception';
import { useEffect, useState, useCallback } from 'react';
import { useEventCallback, useEventListener } from 'usehooks-ts';
import { useRouter } from 'next/router';
import API from '@/services/common.service';
<<<<<<< HEAD
=======

>>>>>>> 0595a16089032e3ab77fef9886a1613486f99bba
export const useTitle = (title: string) => {
  useEffect(() => {
    title && (document.title = title);
  }, [title]);
};

export const useGet = (
  url: string,
  { page_size, page_number, id }: PaginationDTO,
  objSearchParam?: ObjectType,
) => {
  const router = useRouter();
  const [data, setData] = useState<any>({});
  const [error, setError] = useState<any>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);

<<<<<<< HEAD
  const handleGetData = async () => {
=======
  const handleGetData = useCallback(async () => {
>>>>>>> 0595a16089032e3ab77fef9886a1613486f99bba
    try {
      const getResult: ResponseAttributes = (await API.getModelRecordPage(url, {
        id,
        page_number,
        page_size,
        objSearchParam,
      })) as ResponseAttributes;
      const { status, data: modelRecordData, error } = getResult;

      switch (status) {
        case RESPONSE_STATUS.SUCCESS: {
          setData({ ...modelRecordData });
          break;
        }
        case RESPONSE_STATUS.FAIL: {
          setError({ ...error });
          break;
        }
      }
    } catch (err) {
      const { message } = err as HttpException;
      setError({
        status: RESPONSE_STATUS.FAIL,
        error: { message } as HttpException,
      });
    }
<<<<<<< HEAD
  };
=======
  }, []);
>>>>>>> 0595a16089032e3ab77fef9886a1613486f99bba

  useEffect(() => {
    setIsLoading(true);
    handleGetData();
    setIsLoading(false);
  }, [url, page_size, page_number, id, router.query]);

  return {
    data,
    error,
    isLoading,
  };
};

export function useLocalStorage<T>(
  key: string,
  initialValue: T,
): [T, SetValue<T>] {
  // Get from local storage then
  // parse stored json or return initialValue
  const readValue = useCallback((): T => {
    // Prevent build error "window is undefined" but keeps working
    if (typeof window === 'undefined') {
      return initialValue;
    }

    try {
      const item = window.localStorage.getItem(key);
      return item ? (parseJSON(item) as T) : initialValue;
    } catch (error) {
      console.warn(`Error reading localStorage key “${key}”:`, error);
      return initialValue;
    }
  }, [initialValue, key]);

  // State to store our value
  // Pass initial state function to useState so logic is only executed once
  const [storedValue, setStoredValue] = useState<T>(readValue);

  // Return a wrapped version of useState's setter function that ...
  // ... persists the new value to localStorage.
  const setValue: SetValue<T> = useEventCallback((value) => {
    // Prevent build error "window is undefined" but keeps working
    if (typeof window === 'undefined') {
      console.warn(
        `Tried setting localStorage key “${key}” even though environment is not a client`,
      );
    }

    try {
      // Allow value to be a function so we have the same API as useState
      const newValue = value instanceof Function ? value(storedValue) : value;

      // Save to local storage
      window.localStorage.setItem(key, JSON.stringify(newValue));

      // Save state
      setStoredValue(newValue);

      // We dispatch a custom event so every useLocalStorage hook are notified
      window.dispatchEvent(new Event('local-storage'));
    } catch (error) {
      console.warn(`Error setting localStorage key “${key}”:`, error);
    }
  });

  useEffect(() => {
    setStoredValue(readValue());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleStorageChange = useCallback(
    (event: StorageEvent | CustomEvent) => {
      if ((event as StorageEvent)?.key && (event as StorageEvent).key !== key) {
        return;
      }
      setStoredValue(readValue());
    },
    [key, readValue],
  );

  // this only works for other documents, not the current one
  useEventListener('storage', handleStorageChange);

  // this is a custom event, triggered in writeValueToLocalStorage
  // See: useLocalStorage()
  useEventListener('local-storage', handleStorageChange);

  return [storedValue, setValue];
}
export const useGetURLParams = () => {
  const router = useRouter();
  const slug = router.query.slug as string[];
  return slug;
};
