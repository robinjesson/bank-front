import { Observable, Subject } from "rxjs";
import { EDialogAction } from "./enums";

export class CNotification {
    text: string;
    date: Date;
    showAction: boolean;
    private action$: Subject<EDialogAction> = new Subject<EDialogAction>();

    constructor(text: string, date: Date = new Date(), showAction: boolean = false) {
        this.text = text;
        this.date = date;
        this.showAction = showAction;
    }

    sendAction(action: EDialogAction) {
        this.action$.next(action);
        this.action$.complete()
    }

    get action() {
        return this.action$.asObservable();
    }
}