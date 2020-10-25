import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { API_ENTRIES, HTTP_JSON_CONTENT } from '../utils/consts';
import { TEntryRequest, TEntryResponse } from '../utils/types';

@Injectable({
    providedIn: 'root'
})
export class EntryService {
    constructor(private _httpClient: HttpClient) { }

    public addEntry(req: TEntryRequest): Observable<TEntryResponse | TEntryResponse[]> {
            return this._httpClient.post<TEntryResponse | TEntryResponse[]>(API_ENTRIES, req, HTTP_JSON_CONTENT).pipe(take(1));
        }
}