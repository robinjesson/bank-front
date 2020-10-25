import { Injectable, TemplateRef } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


export type TNotification = {
  text: string,
  date?: Date
}

@Injectable({
  providedIn: 'root'
})
export class NotificationService {
  public notifications: TNotification[] = [
    {text:"salut", date: new Date()},
    {text:"hello hello hello hello hello hello", date: new Date()},
  ];

  public constructor(private _snackBar: MatSnackBar) {}

  public show(notif: TNotification, toStack: boolean = true): void {
    notif.date = new Date();
    if(toStack)
      this.notifications.push(notif);
    this._snackBar.open(notif.text, 'Fermer', {
      verticalPosition: "top",
      horizontalPosition: "right",
      duration: 5000,
      politeness:"off"
    });
  }

  public remove(not: TNotification): void {
    this.notifications = this.notifications.filter(n => n != not);
  }

}
