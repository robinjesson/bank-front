import { Directive } from '@angular/core';

export type TDialogResult<T> = {
    action: 'OK' | 'CANCEL';
    result: T;
}

@Directive()
export abstract class BaseDialog {
    protected result: TDialogResult<any>;
}