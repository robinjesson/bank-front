import { DragDropModule } from '@angular/cdk/drag-drop';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatBadgeModule } from '@angular/material/badge';
import { MatBottomSheetModule } from '@angular/material/bottom-sheet';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatDialogModule } from '@angular/material/dialog';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatMenuModule } from '@angular/material/menu';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './components/admin/admin.component';
import { ArrayAccountsComponent } from './components/array-accounts/array-accounts.component';
import { ArrayWritingsComponent } from './components/array-writings/array-writings.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AccountAddComponent } from './components/dialogs/account-add/account-add.component';
import { WritingAddComponent } from './components/dialogs/writing-add/writing-add.component';
import { LoginComponent } from './components/login/login.component';
import { MenuToolsComponent } from './components/menu-tools/menu-tools.component';
import { MenuComponent } from './components/menu/menu.component';
import { NotificationPanelComponent } from './components/notification-panel/notification-panel.component';
import { NotificationComponent } from './components/notification/notification.component';
import { PassCodeComponent } from './components/pass-code/pass-code.component';
import { PrivateComponent } from './components/private/private.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { UserComponent } from './components/user/user.component';
import { AccountColorDirective } from './directives/account-color.directive';
import { ColorDuetDirective } from './directives/color-duet.directive';
import { WritingColorDirective } from './directives/writing-color.directive';
import { NamePipe } from './pipes/name.pipe';
import { TodayPipe } from './pipes/today.pipe';
import { TranslatePipe } from './pipes/translate.pipe';
import { AuthInterceptor } from './utils/auth.interceptor';





const materialImport = [
  MatGridListModule,
  MatBottomSheetModule,
  MatSelectModule,
  MatCheckboxModule,
  MatCardModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  MatTabsModule,
  MatToolbarModule,
  MatSnackBarModule,
  MatTooltipModule,
  MatTableModule,
  MatMenuModule,
  MatDialogModule,
  MatSidenavModule,
  MatBadgeModule,
  MatDatepickerModule,
  MatRippleModule,
  DragDropModule
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
    WritingColorDirective,
    TranslatePipe,
    AccountAddComponent,
    NotificationComponent,
    AdminComponent,
    WritingAddComponent,
    NotificationPanelComponent,
    TodayPipe,
    MenuToolsComponent
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
