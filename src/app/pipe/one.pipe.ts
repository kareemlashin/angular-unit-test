import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'oneAll',
  pure:false
})
export class OnePipe implements PipeTransform {

  transform(value: any): any {
    return value.toLowerCase();
  }

}
