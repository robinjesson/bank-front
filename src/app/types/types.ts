import { ComponentType } from '@angular/cdk/portal';
import { EDialogAction, EFormType } from './enums';

export type TDialogResponse<T> = {
    action: EDialogAction,
    value?: T
}

export type TTab<T> = {
    name: string;
    creation: Date;
    content?: T;
    component: ComponentType<unknown>;
}