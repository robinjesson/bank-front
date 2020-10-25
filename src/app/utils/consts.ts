import { HttpHeaders } from '@angular/common/http';

export const API: string = 'http://localhost:9090';
export const API_AUTH: string = API + '/auth';
export const API_USERS: string = API + '/users';
export const API_ACCOUNTS: string = API + '/accounts';
export const API_ENTRIES: string = API + '/entries';


export const HTTP_JSON_CONTENT = { 
    headers: new HttpHeaders({ 
        'Content-Type': 'application/json' ,
    }) 
};