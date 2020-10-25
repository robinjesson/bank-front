import { Component, OnInit, AfterViewInit, Output, EventEmitter } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public clicked: boolean = false;
  public username: string;
  @Output() public showNotification: EventEmitter<void> = new EventEmitter<void>();

  constructor(private _authenticationService: AuthenticationService,
    public _notificationService: NotificationService) { }

  ngOnInit(): void {
    this.username = this._authenticationService.getUser().username;
  }

  

  public toggleMenu(): void {
    this.clicked = !this.clicked;
  }

  public isAuthenticated(): boolean {
    return this._authenticationService.isAuthenticated()
  }

  

  public random(max: number): number {
    return Math.floor((Math.random() * max));
  }

  

}
