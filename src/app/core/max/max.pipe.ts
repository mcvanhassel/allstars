import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'max' })
export class MaxPipe implements PipeTransform {
  transform<T>(items: T[] | null | undefined, prop: keyof T): T[] {
    return (
      items?.reduce((result: T[], item) => {
        const max = result?.length > 0 ? result[0][prop] ?? 0 : 0;
        const current = item[prop] ?? 0;

        return current > max ? [item] : current === max ? [...result, item] : [...result];
      }, []) ?? []
    );
  }
}
