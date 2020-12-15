import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/shared/services/authentication.service';

@Component({
  selector: 'app-menu-tools',
  templateUrl: './menu-tools.component.html',
  styleUrls: ['./menu-tools.component.less']
})
export class MenuToolsComponent implements OnInit {

  constructor(private _authenticationService: AuthenticationService) { }

  ngOnInit(): void {
  }

  public setLang(lang: string): void {
    this._authenticationService.saveLang(lang);
  }

  public onSignOut(): void {
    this._authenticationService.signOut();
  }

}
