import { ComponentType } from '@angular/cdk/portal';
import { EDialogAction, EFormType } from './enums';


export type TId = number;

export type TDialogResponse<T> = {
    action: EDialogAction,
    value?: T
}

export type TTab<T> = {
    name: string;
    id: TId;
    content?: T;
    component: ComponentType<unknown>;
    index: number;
}

export type TNotification = {
    text: string;
    date?: Date;
    showAction?: boolean;
}