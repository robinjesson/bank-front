import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccountAddComponent } from './account-add/account-add.component';
import { ArrayWritingsComponent } from './array-writings/array-writings.component';
import { AccountSelectorComponent } from './account-selector/account-selector.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DateSelectorComponent } from './date-selector/date-selector.component';
import { TileComponent } from './tile/tile.component';
import { WritingAddComponent } from './writing-add/writing-add.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AccountAddComponent,
    ArrayWritingsComponent,
    AccountSelectorComponent,
    DashboardComponent,
    DateSelectorComponent,
    TileComponent,
    WritingAddComponent
  ],
  imports: [
    CommonModule,
    SharedModule,FormsModule
  ]
})
export class AccountModule { }
