import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserComponent } from './components/user/user.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToatsContainerComponent } from './components/toats-container/toats-container.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { ColorDuetDirective } from './directives/color-duet.directive';
import { NamePipe } from './pipes/name.pipe';
import { AccountColorDirective } from './directives/account-color.directive';
import { AuthInterceptor } from './utils/auth.interceptor';
import { PrivateComponent } from './components/private/private.component';
import { ArrayAccountsComponent } from './components/array-accounts/array-accounts.component';
import { PassCodeComponent } from './components/pass-code/pass-code.component';
import { LoginComponent } from './components/login/login.component';
import { ArrayWritingsComponent } from './components/array-writings/array-writings.component';
import { WritingColorDirective } from './directives/writing-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DashboardComponent,
    UserComponent,
    AuthenticationComponent,
    ToatsContainerComponent,
    SignInComponent,
    ColorDuetDirective,
    NamePipe,
    AccountColorDirective,
    PrivateComponent,
    ArrayAccountsComponent,
    PassCodeComponent,
    LoginComponent,
    ArrayWritingsComponent,
    WritingColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
