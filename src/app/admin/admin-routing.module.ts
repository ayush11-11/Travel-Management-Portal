import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminLoginComponent} from './admin-login/admin-login.component';
import {AdminDashboardComponent} from './admin-dashboard/admin-dashboard.component';
import { AdminGaurdService} from '../Auth/admin/admin-gaurd.service';

const routes: Routes = [
  {path:'adminlogin', component:AdminLoginComponent},
  {path:'admindashboard', component:AdminDashboardComponent,canActivate:[AdminGaurdService]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
