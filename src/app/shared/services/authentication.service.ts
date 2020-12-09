import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscriber } from 'rxjs';
import { Router } from '@angular/router';
import { API_AUTH } from '../../types/consts';
import { take } from 'rxjs/operators';
import { DialogService } from './dialog.service';
import { EDialogAction } from 'src/app/types/enums';
import { TranslateService } from '@ngx-translate/core';

const TOKEN_KEY : string = 'auth-token';
const USER_KEY : string  = 'auth-user';
const LANG_KEY : string  = 'lang';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  public constructor(private _httpClient: HttpClient, private _router: Router,
    private _dialogService: DialogService, private _translate: TranslateService) {}

  public authenticate(username: string, password: string) : Observable<any> {
    return this._httpClient.post(API_AUTH, {
      username: username,
      password: password
    }).pipe(take(1));
  }

  /**
   * Logs out the user
   */
  public async signOut() : Promise<void> {
    switch(await this._dialogService.openMessageBox('messageBox.logout')) {
      case EDialogAction.OK:
        window.sessionStorage.clear();
        this._router.navigate(['/signin']);
        break;
      default:
        break;
    }
  }

  /**
   * Save a new token
   * @param token Token to be saved
   */
  public saveToken(token : string) : void {
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY, token);
  }

  /**
   * Gets token stored in the browser
   * @returns token
   */
  public getToken() : string {
    return sessionStorage.getItem(TOKEN_KEY);
  }

  /**
   * Save an user
   * @param user User to be saved
   */
  public saveUser(user : any) :void {
    window.sessionStorage.removeItem(USER_KEY);
    window.sessionStorage.setItem(USER_KEY, JSON.stringify(user));
  }

  public saveLang(lang : string): void {
    this._translate.use(lang.toLowerCase());
    window.sessionStorage.removeItem(LANG_KEY);
    window.sessionStorage.setItem(LANG_KEY, JSON.stringify(lang));
  }

  /**
   * Gets the current user
   */
  public getUser() {
    return JSON.parse(sessionStorage.getItem(USER_KEY));
  }

  public getLang() {
    return JSON.parse(sessionStorage.getItem(LANG_KEY));
  }

  /**
   * Checks if user is authenticated
   * @returns Returns whether the user is authenticated
   */
  public isAuthenticated() : boolean { return !!this.getToken(); }
}
