import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NotificationService } from 'src/app/notification/services/notification.service';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';
import { TabsService } from 'src/app/shared/services/tabs.service';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.less']
})
export class MenuComponent implements OnInit {

  public clicked: boolean = false;
  public username: string;
  @Output() public showNotification: EventEmitter<void> = new EventEmitter<void>();

  constructor(private _authenticationService: AuthenticationService,
    public tabsService: TabsService,
    public notificationService: NotificationService) { }

  ngOnInit(): void {
    this.username = this._authenticationService.getUser().username;
  }


  public isAuthenticated(): boolean {
    return this._authenticationService.isAuthenticated()
  }

  public onTabClick(tab) {
    this.tabsService.openTab(tab);
  } 

  onOpenDrawer() {

    this.clicked = !this.clicked;
    this.showNotification.emit()
  }


  public showNotificationContainer(): void {
    this.notificationService.showFeed();
  }

  

}
