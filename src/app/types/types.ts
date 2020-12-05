import { EDialogAction } from './enums';

export type TDialogResponse<T> = {
    action: EDialogAction,
    value?: T
}