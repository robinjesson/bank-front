import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TypesModule } from '../types/types.module';
import { NotificationComponent } from './notification/notification.component';
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
import { AccountColorDirective } from './directives/account-color.directive';
import { ColorDuetDirective } from './directives/color-duet.directive';
import { WritingColorDirective } from './directives/writing-color.directive';
import { RouterModule } from '@angular/router';
import { KeysPipe } from './pipes/keys.pipe';
import { NamePipe } from './pipes/name.pipe';
import { TodayPipe } from './pipes/today.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { MessageBoxDialogComponent } from './dialog/message-box-dialog/message-box-dialog.component';
import { CustomDialogComponent } from './dialog/custom-dialog/custom-dialog.component';
import { TranslateModule } from '@ngx-translate/core';

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
  MatRippleModule
]

@NgModule({
  declarations: [
    NotificationComponent,
    AccountColorDirective,
    ColorDuetDirective,
    WritingColorDirective,
    KeysPipe,
    NamePipe,
    TodayPipe,
    MessageBoxDialogComponent,
    CustomDialogComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    TypesModule,
    FormsModule,
    ReactiveFormsModule,

    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ...materialImport,
    TranslateModule
  ],
  exports: [
    NotificationComponent,
    AccountColorDirective,
    ColorDuetDirective,
    WritingColorDirective,
    FormsModule,
    ReactiveFormsModule,
    KeysPipe,
    NamePipe,
    TodayPipe,

    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ...materialImport,
    TranslateModule
  ]
})
export class SharedModule { }

