import { HttpHeaders } from '@angular/common/http';

export const API: string = 'http://localhost:9090';
export const API_AUTH: string = API + '/auth';
export const API_USERS: string = API + '/users';
export const API_ACCOUNTS: string = API + '/accounts';
export const API_ENTRIES: string = API + '/entries';


export const HTTP_JSON_CONTENT = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
    })
};


export const frDays: { [day: number]: string } = {
    1: 'Lundi',
    2: 'Mardi',
    3: 'Mercredi',
    4: 'Jeudi',
    5: 'Vendredi',
    6: 'Samedi',
    0: 'Dimanche',
};

export const enDays: { [day: number]: string } = {
    1: 'Monday',
    2: 'Tuesday',
    3: 'Wednesday',
    4: 'Thursday',
    5: 'Friday',
    6: 'Saturday',
    0: 'Sunday',
};

export const frMonths: { [month: number]: string } = {
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

export const enMonths: { [month: number]: string } = {
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