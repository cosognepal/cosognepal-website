const isObject = <T>(value: T): boolean => {
  return typeof value === "object" && value !== null && !Array.isArray(value);
};

// NOTE: works only on dates array or array of objects with a key as date.
const quickSort = <T>(a: T[], sortKey?: string): T[] => {
  if (a.length <= 1) return a;
  let pivot = a[0];
  if (sortKey && isObject(pivot))
    pivot = (a[0] as Record<string, T>)[sortKey] as T;

  const leftArray = [];
  const rightArray = [];

  for (let i = 1; i < a.length; i++) {
    if (
      (!isObject(a[i]) &&
        new Date(a[i] as string | Date) < new Date(pivot as string | Date)) ||
      (sortKey &&
        new Date(
          (a[i] as Record<string, unknown>)?.[sortKey] as string | Date
        ) < new Date(pivot as string | Date))
    ) {
      leftArray.push(a[i]);
      continue;
    }
    rightArray.push(a[i]);
  }
  return [
    ...quickSort(leftArray, sortKey),
    a[0],
    ...quickSort(rightArray, sortKey),
  ];
};

type QuickSortByDateParams = {
  data: Array<Record<string, unknown>> | Date[];
  direction: "Asc" | "Des";
  sortKey?: string;
};

type quickSortByDataReturnType<T> = T extends undefined ? Date[] : T[];

// accepts both array of date and a record containing a feild as date and returns a sorted one.
export const quickSortByDate = <T>(
  params: QuickSortByDateParams
): quickSortByDataReturnType<T> => {
  const sortedData = isObject(params.data[0])
    ? quickSort<Record<string, unknown>>(
        params.data as Record<string, unknown>[],
        params.sortKey
      )
    : quickSort<Date>(params.data as Date[]);

  return params.direction === "Asc"
    ? (sortedData as quickSortByDataReturnType<T>)
    : ([...sortedData].reverse() as quickSortByDataReturnType<T>);
};
