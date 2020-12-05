import { Pipe, PipeTransform } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { enMonths, frMonths } from '../../types/consts';

@Pipe({
  name: 'monthName'
})
export class MonthNamePipe implements PipeTransform {

  constructor(private _authService: AuthenticationService) {}

  transform(month: number): string {
    const lang: string = (this._authService.getLang() ? this._authService.getLang() : 'FR');
    if(lang === 'FR')
      return frMonths[month]
    else
      return enMonths[month]
  }

}
