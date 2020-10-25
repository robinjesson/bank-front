import { Pipe, PipeTransform } from '@angular/core';
import { TranslatorService } from '../services/translator.service';
import { lang } from '../utils/lang';
import { from } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Pipe({
  name: 'translate',
  pure: false
})
export class TranslatePipe implements PipeTransform {

  constructor(
    private _authService: AuthenticationService) {}

  transform(translateId: string): string {
    const defaultLang: string = (this._authService.getLang() ? this._authService.getLang() : 'FR');
    return lang[defaultLang][translateId] ? lang[defaultLang][translateId] : translateId;
  }

}
