import { Pipe, PipeTransform } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

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

const frDays: {[day: number]: string} = {
  1: 'Lundi',
  2: 'Mardi',
  3: 'Mercredi',
  4: 'Jeudi',
  5: 'Vendredi',
  6: 'Samedi',
  0: 'Dimanche',
};

const enDays: {[day: number]: string} = {
  1: 'Monday',
  2: 'Tuesday',
  3: 'Wednesday',
  4: 'Thursday',
  5: 'Friday',
  6: 'Saturday',
  0: 'Sunday',
};

const frMonths: {[month: number]: string} = {
  0: 'janvier',
  1: 'février',
  2: 'mars',
  3: 'avril',
  4: 'mai',
  5: 'juin',
  6: 'juillet',
  7: 'août',
  8: 'septembre',
  9: 'octobre',
  10: 'novembre',
  11: 'décembre',
};

const enMonths: {[month: number]: string} = {
  0: 'January',
  1: 'February',
  2: 'March',
  3: 'April',
  4: 'May',
  5: 'June',
  6: 'July',
  7: 'August',
  8: 'September',
  9: 'October',
  10: 'November',
  11: 'December',
};
