import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_ACCOUNTS, HTTP_JSON_CONTENT } from '../utils/consts';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private _httpClient: HttpClient) { }

  public addAccount(account: {name: string, total: number, userId: number}): Observable<any> {
    return this._httpClient.post(API_ACCOUNTS, account, HTTP_JSON_CONTENT).pipe(take(1));
  }

  public getAccountWritings(id: number): Observable<any> {
    return this._httpClient.get(API_ACCOUNTS + '/' + id + '/entries').pipe(take(1));
  }
}
