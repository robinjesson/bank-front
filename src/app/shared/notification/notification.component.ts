import { Component, OnInit, Input } from '@angular/core';
import { NotificationService, TNotification } from '../services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.less']
})
export class NotificationComponent implements OnInit {
  @Input() public notification: TNotification;
  public isHover: boolean = false;
  console = console;
  
  constructor(public _notificationService: NotificationService) { }

  ngOnInit(): void {
  }

}
