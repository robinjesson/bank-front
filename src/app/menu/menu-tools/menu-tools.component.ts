import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import $ from 'jquery';
import { NotificationService } from 'src/app/notification/services/notification.service';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-menu-tools',
  templateUrl: './menu-tools.component.html',
  styleUrls: ['./menu-tools.component.less']
})
export class MenuToolsComponent implements OnInit {

  constructor(private _authenticationService: AuthenticationService, private _notificationService: NotificationService) { }

  ngOnInit(): void {
  }

  public setLang(lang: string): void {
    this._authenticationService.saveLang(lang);
  }

  public onSignOut(): void {
    this._authenticationService.signOut();
  }

  public showNotificationContainer(): void {
    this._notificationService.showFeed();
  }

}
