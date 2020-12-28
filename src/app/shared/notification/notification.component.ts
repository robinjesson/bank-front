import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { EDialogAction } from 'src/app/types/enums';
import { TNotification } from 'src/app/types/types';
import { NotificationService } from '../../notification/services/notification.service';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.less']
})
export class NotificationComponent implements OnInit {
  EDialogAction = EDialogAction;
  @Input() public notification: TNotification;
  @Output() public action = new EventEmitter<EDialogAction>();
  public isHover: boolean = false;
  console = console;
  
  constructor(public _notificationService: NotificationService) { }

  ngOnInit(): void {
  }

}
