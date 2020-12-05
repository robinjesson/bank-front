import { Directive } from '@angular/core';


export type TDialogAction = 'OK' | 'CANCEL';

export type TDialogResult<T> = {
    action: TDialogAction;
    result: T;
}

@Directive()
export abstract class BaseDialog {
    protected result: TDialogResult<any>;
}