import { Injectable, TemplateRef } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import $ from "jquery";
import { EDialogAction } from 'src/app/types/enums';
import { TNotification } from 'src/app/types/types';




@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  public notifications: {[day: string]: TNotification[]} = {
    '2020-12-21': [{text: 'hello 3'}],
    '2020-12-20': [{text: 'hello 1'}, {text: 'hello 2'}],
  };

  public constructor(private _snackBar: MatSnackBar) {}

  public show(notif: TNotification, toStack: boolean = true): Promise<EDialogAction> {
    const now: Date = new Date();
    notif.date = new Date();
    if(true) {
      const day: string = `${now.getFullYear()}-${now.getMonth()+1}-${now.getDate()+1}`;
      if(!this.notifications[day]) {
        this.notifications[day] = [];
      }
      this.notifications[day].push(notif);
    }
    this.showFeed();
    return null;
  }

  public remove(not: TNotification): void {

    for(let day in this.notifications) {
      this.notifications[day] = this.notifications[day].filter(n => n != not);
      if(this.notifications[day].length == 0) {
        delete this.notifications[day];
      }
    }
    console.log(this.notifications)
  }

  public showFeed(): void {
    $('app-notifications-container').show();
  }

  public hideFeed(): void {
    $('app-notifications-container').hide();
  }

}
