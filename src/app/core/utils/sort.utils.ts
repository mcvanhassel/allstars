enum SortDirection {
  Ascending = 1,
  Descending = -1,
}

type SortableType = string | boolean | number | bigint;
type SortableProperty<T> = { [P in keyof T]: T[P] extends SortableType ? P : never }[keyof T];
type SortableObject<T> = Pick<T, keyof T>;

export const sortAscending = <T extends SortableType>(items: T[]): T[] => sort(SortDirection.Ascending)(items);

export const sortDescending = <T extends SortableType>(items: T[]): T[] => sort(SortDirection.Descending)(items);

export const sortAscendingBy = <T extends SortableObject<T>>(property: SortableProperty<T>): ((items: T[]) => T[]) =>
  sortBy(property)(SortDirection.Ascending);

export const sortDescendingBy = <T extends SortableObject<T>>(property: SortableProperty<T>): ((items: T[]) => T[]) =>
  sortBy(property)(SortDirection.Descending);

function sort(direction: SortDirection) {
  return <T extends SortableType>(items: T[]): T[] => items.slice().sort((a, b) => direction * compare(a, b));
}

function sortBy<T extends SortableObject<T>>(property: SortableProperty<T>) {
  return (direction: SortDirection) => (items: T[]): T[] => items.slice().sort((a, b) => direction * compare(a[property], b[property]));
}

function compare(a: SortableType, b: SortableType): number {
  return typeof a === 'string' && typeof b === 'string' ? a.localeCompare(b) : a > b ? 1 : a < b ? -1 : 0;
}
