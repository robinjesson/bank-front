import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpRequest } from '@angular/common/http';
import { take } from 'rxjs/operators';

const username: string = 'apikey';
const password: string = 'CFFQFQgaqO3O1bHwQ7oPrzadQqhU3-5bNUCGeB0ROR-0';

@Injectable({
  providedIn: 'root'
})
export class TranslatorService {

  

  constructor(private _httpClient: HttpClient) { }
}
