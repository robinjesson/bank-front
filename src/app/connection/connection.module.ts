import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { PassCodeComponent } from './pass-code/pass-code.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    LoginComponent,
    PassCodeComponent,
    SignInComponent,
    AuthenticationComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [

    LoginComponent,
    PassCodeComponent,
    SignInComponent,
    AuthenticationComponent
  ]
})
export class ConnectionModule { }
