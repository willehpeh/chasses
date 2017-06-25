import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'shorten'
})
export class ShortenPipe implements PipeTransform {
  transform(value: any) {
    if(value.length > 140) {
      const newString = value.substr(0, 140) + '...';
      return newString;
    }
    else {
      return value;
    }
  }
}
