import { Injectable } from '@angular/core';
import { lang } from '../utils/lang';
import { AuthenticationService } from './authentication.service';

@Injectable({
  providedIn: 'root'
})
export class TranslatorService {
  constructor(
    private _authService: AuthenticationService) {}

  translate(translateId: string): string {
    const defaultLang: string = (this._authService.getLang() ? this._authService.getLang() : 'FR');
    return lang[defaultLang][translateId] ? lang[defaultLang][translateId] : translateId;
  }
}
