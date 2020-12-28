import { Component, ElementRef, OnInit } from '@angular/core';
import { CNotification } from 'src/app/types/classes';
import { NotificationService } from '../services/notification.service';

@Component({
  selector: 'app-notifications-container',
  templateUrl: './notifications-container.component.html',
  styleUrls: ['./notifications-container.component.css']
})
export class NotificationsContainerComponent implements OnInit {
  public notifications: {[day: string]: CNotification[]}

  constructor(private _notificationService: NotificationService) { 
    this._notificationService.notifications.subscribe(
      (data) => this.notifications = data
    )
  }

  ngOnInit(): void {
  }

  public closeContainer(): void {
    this._notificationService.hideFeed();
  }

}
