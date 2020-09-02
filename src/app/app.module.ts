import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserComponent } from './components/user/user.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTabsModule} from '@angular/material/tabs';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTooltipModule} from '@angular/material/tooltip';


const materialImport = [
  MatCardModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  MatTabsModule,
  MatToolbarModule,
  MatSnackBarModule,
  MatTooltipModule
]

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DashboardComponent,
    UserComponent,
    AuthenticationComponent,
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
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ...materialImport
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
