import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'sliceTime'
})
export class SliceTimePipe implements PipeTransform {

  transform(value: string, ...args: any[]): any {
    if (value) {
      return value.split(' ')[0];
    }
  }

}
