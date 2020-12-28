import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { PrivateComponent } from './private/private.component';
import { UserComponent } from './user/user.component';
import { SharedModule } from '../shared/shared.module';
import { MenuModule } from '../menu/menu.module';
import { NotificationModule } from '../notification/notification.module';



@NgModule({
  declarations: [
    AdminComponent,
    PrivateComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MenuModule,
    NotificationModule
  ]
})
export class SpacesModule { }
