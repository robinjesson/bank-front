import { Component, OnInit, AfterViewInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  public clicked: boolean = false;
  public username: string;
  

  constructor(private _authenticationService: AuthenticationService) { }

  ngOnInit(): void {
    this.username = this._authenticationService.getUser().username;
  }

  

  public toggleMenu(): void {
    this.clicked = !this.clicked;
  }

  public isAuthenticated(): boolean {
    return this._authenticationService.isAuthenticated()
  }

  public onSignOut(): void {
    this._authenticationService.signOut();
  }

  public random(max: number): number {
    return Math.floor((Math.random() * max));
  }

}
