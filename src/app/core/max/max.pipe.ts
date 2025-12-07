import { type PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'max',
})
export class MaxPipe implements PipeTransform {
  transform<T>(items: T[] | null | undefined, prop: keyof T): T[] {
    return (
      items?.reduce((result: T[], item) => {
        const firstItem = result[0];
        const max = firstItem !== undefined && firstItem !== null ? (firstItem[prop] ?? 0) : 0;
        const current = item[prop] ?? 0;

        return current > max ? [item] : current === max ? [...result, item] : [...result];
      }, []) ?? []
    );
  }
}
