import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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
    public tabsService: TabsService) { }

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

  

}
