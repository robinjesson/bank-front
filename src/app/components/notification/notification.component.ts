import { Component, OnInit, Input } from '@angular/core';
import { NotificationService, TNotification } from 'src/app/services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  @Input() public notification: TNotification;
  public isHover: boolean = false;
  console = console;
  
  constructor(public _notificationService: NotificationService) { }

  ngOnInit(): void {
  }

}
