import { Component } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.less'],
})
export class AuthenticationComponent {

  

  public toggleView = false;

  constructor() {}

  public toggleLoginRegister(): void {
    this.toggleView = !this.toggleView;
  }

  

  



  

}
