import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'secondsTransformer'
})
export class SecondsTransformerPipe implements PipeTransform {

  transform(value: any): any {
    if (typeof value === 'number') {
      let minutes = Math.floor(value / 60);
      let tmpSeconds = value % 60;
      let seconds = (tmpSeconds < 10 ? '0' : '') + tmpSeconds;
      return `${minutes}:${seconds}`
    }
    return 'Coffee time';
  }

}
