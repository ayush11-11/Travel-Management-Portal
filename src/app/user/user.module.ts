import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthRoutingModule } from './user-routing.module';
import { RegistrationComponent } from './registration/registration.component';
import { LoginComponent } from './login/login.component';
import { CountryPickerModule } from 'ngx-country-picker';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { HeaderComponent } from './user-dashboard/header/header.component';
import { TicketComponent } from './user-dashboard/ticket/ticket.component';
import { TicketListComponent } from './user-dashboard/ticket-list/ticket-list.component';
import { ForgetUserComponent } from './forget-user/forget-user.component';
import { NgxPaginationModule } from 'ngx-pagination';
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";
 

@NgModule({
  declarations: [RegistrationComponent, LoginComponent,UserDashboardComponent,HeaderComponent,TicketComponent,TicketListComponent, ForgetUserComponent],
  imports: [
    CommonModule,NgxPaginationModule,MatIconModule,MatDialogModule,
    AuthRoutingModule,ReactiveFormsModule, CountryPickerModule.forRoot()
  ],
  exports:[LoginComponent,RegistrationComponent,UserDashboardComponent]
})
export class UserModule { }
