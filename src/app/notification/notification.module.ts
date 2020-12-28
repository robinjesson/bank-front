import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotificationsContainerComponent } from './notifications-container/notifications-container.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [NotificationsContainerComponent],
  imports: [
    CommonModule,
    SharedModule
  ], 
  exports: [NotificationsContainerComponent]
})
export class NotificationModule { }
