import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {RegistrationComponent} from './registration/registration.component';
import {LoginComponent} from './login/login.component';
import {UserDashboardComponent} from './user-dashboard/user-dashboard.component';
import {TicketComponent} from './user-dashboard/ticket/ticket.component'
import {TicketListComponent} from './user-dashboard/ticket-list/ticket-list.component'
import {ForgetUserComponent} from './forget-user/forget-user.component';
import {UserGaurdService} from '../Auth/user/user-gaurd.service'

const routes: Routes = [
  {path:'login', component:LoginComponent},
  {path:'registration', component:RegistrationComponent},
  {path:'userdashboard/:id', component:UserDashboardComponent,canActivate:[UserGaurdService]},
  {path:'ticket', component:TicketComponent,canActivate:[UserGaurdService]},
  {path:'ticketlist', component:TicketListComponent,canActivate:[UserGaurdService]},
  {path:'forget', component:ForgetUserComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
