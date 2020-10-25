import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserComponent } from './components/user/user.component';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { AuthenticationGuard } from './guards/authentication.guard';
import { PrivateComponent } from './components/private/private.component';
import { AdminGuard } from './guards/admin.guard';
import { AdminComponent } from './components/admin/admin.component';


const routes: Routes = [
  { path: '', redirectTo: 'signin', pathMatch: 'full' },
  { path: 'signin', component: AuthenticationComponent },
  { path: 'private', canActivate: [AuthenticationGuard], component: PrivateComponent,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', canActivate: [AuthenticationGuard], component: DashboardComponent },
      { path: 'user', canActivate: [AuthenticationGuard], component: UserComponent },
      { path: 'admin', canActivate: [AdminGuard], component: AdminComponent },
    ] 
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
