import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'slicedWord',
})
export class PureSlicePipe implements PipeTransform {
  transform(value: string, slicedWord: number = 7): string {
    if (!value) {
      return '';
    }
    if (value.length > slicedWord) {
      return value.slice(0, slicedWord) + '...';
    }
    return value;
  }
}
