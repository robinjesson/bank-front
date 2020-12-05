import { Component } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
})
export class AuthenticationComponent {

  

  public toggleView = false;

  constructor() {}

  public toggleLoginRegister(): void {
    this.toggleView = !this.toggleView;
  }

  

  



  

}
