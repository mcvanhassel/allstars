import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'sum' })
export class SumPipe implements PipeTransform {
  transform<T>(items: T[] | null | undefined, prop: keyof T): number {
    return items?.reduce((result: number, item) => result + +item[prop], 0) ?? 0;
  }
}
