import { Injectable, TemplateRef } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import $ from "jquery";
import { Subject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { CNotification } from 'src/app/types/classes';
import { EDialogAction } from 'src/app/types/enums';




@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  private _notifications: {[day: string]: CNotification[]} = {};

  private subject = new Subject<{[day: string]: CNotification[]}>();

  public get notifications() {
    return this.subject.asObservable();
  }

  public newNotifications: boolean = false;

  public constructor(private _snackBar: MatSnackBar) {
    this.subject.next(this._notifications);
  }

  public show(notif: {
         text: string;
         date?: Date;
         showAction?: boolean;
    }, openFeed: boolean = false): void | Promise<EDialogAction> {
    const n = new CNotification(notif.text, notif.date, notif.showAction);
    const now: Date = new Date();
    notif.date = new Date();
    const day: string = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate() + 1}`;
    if (!this._notifications[day]) {
      this._notifications[day] = [];
    }
    this._notifications[day].push(n);
    this.subject.next(this._notifications);
    this.newNotifications = true;
    if(openFeed || n.showAction) {
      this.showFeed();
    }
    if(notif.showAction) {
      return n.action.pipe(
        tap(() => {
          this.hideFeed();
          this.remove(n);
        })
      ).toPromise();
    }
    
  }

  public remove(not: CNotification): void {

    for(let day in this._notifications) {
      this._notifications[day] = this._notifications[day].filter(n => n != not);
      if(this._notifications[day].length == 0) {
        delete this._notifications[day];
      }
    }
    this.subject.next(this._notifications);
  }

  public showFeed(): void {
    $('app-notifications-container').show();
  }

  public hideFeed(): void {
    $('app-notifications-container').hide();
    this.newNotifications = false;
  }

}
