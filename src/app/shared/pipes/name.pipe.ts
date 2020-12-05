import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'name'
})
export class NamePipe implements PipeTransform {

  transform(str: string): unknown {
    return str.substring(0,1).toUpperCase() + str.substring(1,str.length).toLowerCase();
  }

}
