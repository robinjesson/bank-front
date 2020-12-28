import { Component, ElementRef, OnInit } from '@angular/core';
import { NotificationService } from '../services/notification.service';
import $ from 'jquery';

@Component({
  selector: 'app-notifications-container',
  templateUrl: './notifications-container.component.html',
  styleUrls: ['./notifications-container.component.css']
})
export class NotificationsContainerComponent implements OnInit {

  constructor(public notificationService: NotificationService, private host: ElementRef<HTMLElement>) { }

  ngOnInit(): void {
  }

  public closeContainer(): void {
    $('app-notifications-container').hide();
  }

}
