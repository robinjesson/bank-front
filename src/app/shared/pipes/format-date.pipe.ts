import { DatePipe } from '@angular/common';
import { Inject, LOCALE_ID, Pipe, PipeTransform } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Pipe({
  name: 'formatDate',
  pure: false
})
export class FormatDatePipe implements PipeTransform {
  private datePipe: DatePipe;

  constructor(private _authService: AuthenticationService, @Inject(LOCALE_ID) private _locale: string) {
    this.datePipe = new DatePipe(this._locale)
  }

  transform(value: unknown, ...args: unknown[]): string | null {
    const lang: string = (this._authService.getLang() ? this._authService.getLang() : 'FR');
    let format: string;
    if(lang === 'FR') {
      format = 'd/M/yy';
    }
    else if(lang === 'EN'){
      format = 'M/d/yy';
    }
    return this.datePipe.transform(value, format);
  }

}
