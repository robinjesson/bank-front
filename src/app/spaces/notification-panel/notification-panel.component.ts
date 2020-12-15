import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/shared/services/notification.service';


@Component({
  selector: 'app-notification-panel',
  templateUrl: './notification-panel.component.html',
  styleUrls: ['./notification-panel.component.less']
})
export class NotificationPanelComponent implements OnInit {

  public today: Date = new Date();
  public weather: {
    temp: number,
    description: string,
    icon: string
  };

  constructor(public _notificationService: NotificationService) { }

  async ngOnInit(): Promise<void> {
  }

}
