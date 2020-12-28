import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { CNotification } from 'src/app/types/classes';
import { EDialogAction } from 'src/app/types/enums';
import { NotificationService } from '../../notification/services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.less']
})
export class NotificationComponent  {
  EDialogAction = EDialogAction;
  @Input() public notification: CNotification;
  public isHover: boolean = false;
  
  constructor(public _notificationService: NotificationService) { }

}
