import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './account/dashboard/dashboard.component';
import { AuthenticationComponent } from './connection/authentication/authentication.component';
import { AdminGuard } from './shared/guards/admin.guard';
import { AuthenticationGuard } from './shared/guards/authentication.guard';
import { AdminComponent } from './spaces/admin/admin.component';
import { NotificationPanelComponent } from './spaces/notification-panel/notification-panel.component';
import { PrivateComponent } from './spaces/private/private.component';
import { UserComponent } from './spaces/user/user.component';


const routes: Routes = [
  { path: '', redirectTo: 'private', pathMatch: 'full' },
  { path: 'signin', component: AuthenticationComponent },
  { path: 'private', canActivate: [AuthenticationGuard], component: PrivateComponent, children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', canActivate: [AuthenticationGuard], component: DashboardComponent },
      { path: 'charts', canActivate: [AuthenticationGuard], component: DashboardComponent },
      { path: 'user', canActivate: [AuthenticationGuard], component: UserComponent, outlet: 'drawer' },
      { path: 'admin', canActivate: [AdminGuard], component: AdminComponent, outlet: 'drawer' },
      { path: 'notifications', canActivate: [AdminGuard], component: NotificationPanelComponent, outlet: 'drawer' },
    ] 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
