import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminComponent } from './admin/admin.component';
import { NotificationPanelComponent } from './notification-panel/notification-panel.component';
import { PrivateComponent } from './private/private.component';
import { UserComponent } from './user/user.component';
import { SharedModule } from '../shared/shared.module';
import { MenuModule } from '../menu/menu.module';



@NgModule({
  declarations: [
    AdminComponent,
    NotificationPanelComponent,
    PrivateComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MenuModule
  ]
})
export class SpacesModule { }
