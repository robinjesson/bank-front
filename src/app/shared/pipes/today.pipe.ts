import { Pipe, PipeTransform } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { enDays, enMonths, frDays, frMonths } from '../../types/consts';

@Pipe({
  name: 'today',
  pure: false
})
export class TodayPipe implements PipeTransform {

  constructor(private _authService: AuthenticationService) {}

  transform(today: Date): string {
    const lang: string = (this._authService.getLang() ? this._authService.getLang() : 'FR');
    if(lang === 'FR') {
      return `${frDays[today.getDay()]}
      ${today.getDate()} ${frMonths[today.getMonth()]} ${today.getFullYear()}`;
    }
    else if(lang === 'EN'){
      const day = today.getDate();
      let numberExtension = 'th';
      if(day === 1 || day ===  21 || day ===  31) {
        numberExtension = 'st'
      }
      else if(day === 2 || day ===  22) {
        numberExtension = 'nd'
      }
      else if(day === 3 || day ===  23) {
        numberExtension = 'rd'
      }

      return `${enDays[today.getDay()]}, the ${day}${numberExtension} of ${enMonths[today.getMonth()]} ${today.getFullYear()}.`;
    }
  }

}

