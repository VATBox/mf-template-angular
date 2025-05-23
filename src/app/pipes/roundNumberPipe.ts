import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'roundNumber',
})
export class RoundNumberPipe implements PipeTransform {
  transform(value: number | undefined, decimalPoints: number){
    if (value) {
      const result = Number(value.toFixed(decimalPoints)).toLocaleString();
      return result;
    }
    return value;
  }
}
