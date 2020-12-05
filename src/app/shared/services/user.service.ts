import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API_USERS, HTTP_JSON_CONTENT } from '../../types/consts';
import { take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private _httpClient: HttpClient) { }

  public getUser(id: number): Observable<any> {
    return this._httpClient.get(API_USERS + '/' + id).pipe(take(1));
  }

  public getUsers(): Observable<any> {
    return this._httpClient.get(API_USERS).pipe(take(1));
  }

  public addUser(user: {username: string, password: string}): Observable<any> {
    return this._httpClient.post(API_USERS, user, HTTP_JSON_CONTENT).pipe(take(1));
  }

  public updateUser(id: number, req: {field: string, value: unknown}): Observable<any> {
    return this._httpClient.put(API_USERS + '/' + id, req).pipe(take(1));
  }

  public removeUser(id: number): Observable<any> {
    return this._httpClient.delete(API_USERS).pipe(take(1));
  }

  public getUserAccounts(id: number): Observable<any> {
    return this._httpClient.get(API_USERS + '/' + id + '/accounts').pipe(take(1)); 
  }

  

}
